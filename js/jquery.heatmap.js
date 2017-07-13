;(function($, window, document, undefined){
    "use strict"
    $(document).ready(function(){
        var defaults ={
            count: 0,
            divider: 3,
            heatmapWidth: $(window).width(),
            heatmapHeight: $(window).height(),
            div: document.createElement("div"),
            counter: document.createElement("p"),
            canvas: document.createElement("canvas"),
            button: document.createElement("button")
        };
        function construct(){
            defaults.div.setAttribute("id", "heatmapDiv1");
            document.getElementsByTagName("body")[0].appendChild(defaults.div);

            defaults.counter.setAttribute("id", "heatmapP1");
            document.getElementById("heatmapDiv1").appendChild(defaults.counter);
            
            defaults.canvas.setAttribute("id", "heatmapCanvas1");
            document.getElementById("heatmapDiv1").appendChild(defaults.canvas);
            $(defaults.canvas).css({"width":defaults.heatmapWidth/defaults.divider,"height":defaults.heatmapHeight/defaults.divider, "border":"1px solid black"});
            
            defaults.button.setAttribute("id","heatmapButton1");
            $(defaults.button).text("Show/Hide Heatmap");
            document.getElementsByTagName("body")[0].appendChild(defaults.button);

            var context = defaults.canvas.getContext("2d");
            return{
                leftClick: function(xCoor, yCoor){
                    context.beginPath();
                    context.lineWidth = "2";
                    context.strokeStyle = "green";
                    context.moveTo(xCoor, yCoor);
                    context.lineTo(xCoor+1, yCoor);
                    context.stroke();
                },
                rightClick: function(xCoor, yCoor){
                    context.beginPath();
                    context.lineWidth = "2";
                    context.strokeStyle = "purple";
                    context.moveTo(xCoor, yCoor);
                    context.lineTo(xCoor+1, yCoor);
                    context.stroke();
                },
                hideDiv: function(){
                    $(defaults.div).hide();
                },
                toggleDiv: function(){
                    $(defaults.div).toggle();
                }
            }
        }
        var heatmap = construct();
        heatmap.hideDiv();
        setInterval(function(){$(defaults.counter).text(defaults.count)},1);

        $(defaults.button).click(function(){
            heatmap.toggleDiv();
        });
        $(document).click(function(){
            heatmap.leftClick(event.pageX/(defaults.divider*2), event.pageY/(defaults.divider*2))
            defaults.count += 1;
        });
        $(document).contextmenu(function(){
            heatmap.rightClick(event.pageX/(defaults.divider*2), event.pageY/(defaults.divider*2))
            defaults.count += 1;
        });
    });
})(jQuery, window, document);