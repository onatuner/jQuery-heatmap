$(document).ready(function(){
	var script = document.createElement("script");
    script.src = "jcanvas.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);

    var div = document.createElement("div");
    div.setAttribute("id", "heatmapDiv1");
    document.getElementsByTagName("body")[0].appendChild(div);

    var counter = document.createElement("p");
    counter.setAttribute("id", "heatmapP1");
    document.getElementById("heatmapDiv1").appendChild(counter);
    
    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "heatmapCanvas1");
    document.getElementById("heatmapDiv1").appendChild(canvas);

    var button = document.createElement("button");
    button.setAttribute("id","heatmapButton1");
    $(button).text("Show/Hide Heatmap");
    document.getElementsByTagName("body")[0].appendChild(button);

    var count = 0, xPage = 0, yPage = 0;
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var context = canvas.getContext("2d");
    
    $(div).hide();
    setInterval(function(){$(counter).text(count)},1);
    $(canvas).css({"width":windowWidth/3,"height":windowHeight/3, "border":"1px solid red"});
    $(button).click(function(){
        $(div).toggle();
    });

    $(document).click(function(){
        xPage = event.pageX;
        yPage = event.pageY;
        count += 1;
        context.beginPath();
        context.moveTo(xPage/3, yPage/3);
        context.lineTo(xPage/3+1, yPage/3);
        context.stroke();
    });
});
