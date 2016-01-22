var diagonal = function (width, height) {
'use strict';
    var widthSquared = Math.pow(width, 2);
    var heightSquared = Math.pow(height, 2);
    // var area = width * height;
    var perimeter = widthSquared + heightSquared;

    return Math.sqrt(perimeter);
};

var getViewport = function (){
    var intFrameWidth = window.innerWidth;
    var intViewportHeight = window.innerHeight;
    var windowDiagonal = diagonal(intFrameWidth, intViewportHeight);
    console.log(windowDiagonal);
};
