;(function($){
    "use strict"
    $.fn.heatmapElement = function(options){
        // Default options, changeable by the user via HTML
        var defaults = $.extend({
            count: 0,
            disableCount: false,
            disableButton: false,
            refreshSpeed: 400,
            resize: 1,   
        }, options);
        
        var heatmapWidth = this.width();
        var heatmapHeight = this.height(); 

        // Creating the necessary elements for the heatmap
        var div = $("<div></div>");
        var counter = $("<p></p>");
        var canvas = $("<canvas></canvas>");
        if(!defaults.disableButton){
            var button = $("<button>Show/Hide Heatmap</button>");
        }
        var context = canvas[0].getContext("2d");  
        var $this = $(this);
        var heatmap = construct();

        // Constructor funtion: Appends the created elements to their places
        // and contains the click functions
        function construct(){
            $("body").append(div);
            if(!defaults.disableButton){
                $("body").append(button);
            }
            $(div).append(counter);

            $(div).append(canvas);
            canvas[0].width = heatmapWidth*defaults.resize;
            canvas[0].height = heatmapHeight*defaults.resize;
            $(canvas).css({"border":"1px solid black"});

            $(div).hide();
            
            return{
                leftClick: function(xCoor, yCoor){
                    context.beginPath();
                    context.lineWidth = "2";
                    context.strokeStyle = "green";
                    context.moveTo(xCoor, yCoor);
                    context.lineTo(xCoor+1, yCoor+1);
                    context.stroke();
                },
                rightClick: function(xCoor, yCoor){
                    context.beginPath();
                    context.lineWidth = "2";
                    context.strokeStyle = "purple";
                    context.moveTo(xCoor, yCoor);
                    context.lineTo(xCoor+1, yCoor+1);
                    context.stroke();
                },
                toggleDiv: function(){
                    $(div).toggle();
                }
            }
        }
        if(!defaults.disableCount){
            setInterval(function(){$(counter).text("Total clicks on " + $this.prop("tagName") + " Element: " + defaults.count)}, defaults.refreshSpeed);
        }
        if(!defaults.disableButton){
            $(button).click(function(){
                heatmap.toggleDiv();
            });
        }
        // Gets the coordinates of the click and passes it to the appropriate function
        $($this).click(function(){
            var offset = $(this).offset();
            var x = (event.pageX - offset.left)*defaults.resize;
            var y = (event.pageY - offset.top)*defaults.resize;
            
            heatmap.leftClick(x, y);
            if(!defaults.disableCount){
                defaults.count += 1;
            }
        });
        $($this).contextmenu(function(){
            var offset = $(this).offset();
            var x = (event.pageX - offset.left)*defaults.resize;
            var y = (event.pageY - offset.top)*defaults.resize;
            
            heatmap.rightClick(x, y);
            if(!defaults.disableCount){
                defaults.count += 1;
            }
        });
    };
})(jQuery);