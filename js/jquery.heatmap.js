;(function($, window, document, undefined){
    "use strict"
    $(document).ready(function(){
        var defaults ={
            count: 0, xPage: 0, yPage: 0,
            heatmapWidth: $(window).width()/3,
            heatmapHeight: $(window).height()/3,
        };

        var div = document.createElement("div");
        div.setAttribute("id", "heatmapDiv1");
        document.getElementsByTagName("body")[0].appendChild(div);

        var counter = document.createElement("p");
        counter.setAttribute("id", "heatmapP1");
        document.getElementById("heatmapDiv1").appendChild(counter);
        
        var canvas = document.createElement("canvas");
        canvas.setAttribute("id", "heatmapCanvas1");
        document.getElementById("heatmapDiv1").appendChild(canvas);
        var context = canvas.getContext("2d");

        var button = document.createElement("button");
        button.setAttribute("id","heatmapButton1");
        $(button).text("Show/Hide Heatmap");
        document.getElementsByTagName("body")[0].appendChild(button);
        
        $(div).hide();
        setInterval(function(){$(counter).text(defaults.count)},1);
        $(canvas).css({"width":defaults.heatmapWidth,"height":defaults.heatmapHeight, "border":"1px solid red"});
        $(button).click(function(){
            $(div).toggle();
        });

        $(document).click(function(){
            defaults.xPage = event.pageX/3;
            defaults.yPage = event.pageY/3;
            
            context.beginPath();
            context.moveTo(defaults.xPage, defaults.yPage);
            context.lineTo(defaults.xPage+1, defaults.yPage);
            context.stroke();
            
            defaults.count += 1;
        });
    });
})(jQuery, window, document);