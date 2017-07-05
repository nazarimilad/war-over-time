var fs = require('fs');
var args = require('system').args;
var amountOfHtmlPages = args[1];
var fullpath = "file://" + fs.workingDirectory + fs.separator + "html_pages/";

var PAGE_WIDTH = 1920;
var PAGE_HEIGHT = 1080;

var URLS = [];

for (var i = 0; i < amountOfHtmlPages; i++) {
	URLS[i] = fullpath + (i+1) + ".html";
}

var page = require('webpage').create();
var loadInProgress = false;
var pageIndex = 0;

page.viewportSize = {width: PAGE_WIDTH, height: PAGE_HEIGHT};

page.clipRect = {top: 0, left: 0, width: PAGE_WIDTH, height: PAGE_HEIGHT};

page.onLoadStarted = function() {
  loadInProgress = true;
};

page.onLoadFinished = function() {
  loadInProgress = false;
  page.render("screenshots/" + (pageIndex + 1) + ".png");
  console.log((pageIndex + 1) + ".png" + " rendered");
  pageIndex++;
};

setInterval(function() {
  if (!loadInProgress && pageIndex < URLS.length) {
    page.open(URLS[pageIndex]);
  }
  if (pageIndex == URLS.length) {
    phantom.exit();
  }
}, 250);