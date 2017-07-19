# jQuery Click Heatmap Plugin

This plugin appends a canvas at the end of the page and displays the user's clicks on the selected element(s) on that canvas.

## Installation

You should have npm package manager installed to install this plugin with the following command:

``` bash
$ npm install jquery-heatmap
```

Or you can download the plugin from the GitHub repo: https://github.com/onatuner/jQuery-heatmap

## Usage

You can add the heatmap to your html page by simply adding the plugin path in a script tag like so:
``` html
<script src="js/jquery.heatmap.js"></script>
```
After adding the plugin via the script tag you can use it like this:

``` html
$("h1").heatmapElement();
```
This will create a hidden heatmap of the selected element at the end of the page.

## Demo
You can see a working example of this project here: https://onatuner.github.io/jQuery-heatmap/
