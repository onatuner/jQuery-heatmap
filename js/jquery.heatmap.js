;(function($, window, document, undefined){
    "use strict"
    $.fn.heatmapElement = function(options){
        var defaults = $.extend({
            count: 0,
            refreshSpeed: 200,
            heatmapWidth: this.width(),
            heatmapHeight: this.height(),    
        }, options);
        
        var div = document.createElement("div");
        var counter = document.createElement("p");
        var canvas = document.createElement("canvas");
        var button = document.createElement("button");
        var context = canvas.getContext("2d");  
        var $this = $(this);
        var heatmap = construct(div, counter, canvas, button, context);

        function construct(div, counter, canvas, button, context){
            document.getElementsByTagName("body")[0].appendChild(div);
            div.appendChild(counter);
            div.appendChild(canvas);
            console.log(defaults.heatmapHeight);
            console.log(defaults.heatmapWidth);
            $(canvas).css({"width":defaults.heatmapWidth,"height":defaults.heatmapHeight, "border":"1px solid black"});
            $(button).text("Show/Hide Heatmap");
            document.getElementsByTagName("body")[0].appendChild(button);
            $(div).hide();
            
            return{
                leftClick: function(xCoor, yCoor){
                    console.log(xCoor);
                    console.log(yCoor);
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

        setInterval(function(){$(counter).text("Total clicks on " + $this.prop("tagName") + " Element: " + defaults.count)}, defaults.refreshSpeed);

        $(button).click(function(){
            heatmap.toggleDiv();
        });
        $($this).click(function(){
            var offset = $(this).offset(),
                     x = event.pageX - offset.left,
                     y = event.pageY - offset.top;
            
            heatmap.leftClick(x, y);
            defaults.count += 1;
        });
        $($this).contextmenu(function(){
            heatmap.rightClick(event.pageX, event.pageY)
            defaults.count += 1;
        });
    };
})(jQuery, window, document);