var diagonal = function (width, height) {

    var widthSquared = Math.pow(width, 2);
    var heightSquared = Math.pow(height, 2);
    // var area = width * height;
    var perimeter = widthSquared + heightSquared;
    var result = Math.sqrt(perimeter);

    return Math.round(result);
};

var getViewport = function (){
    var intFrameWidth = window.innerWidth;
    var intViewportHeight = window.innerHeight;
    var windowDiagonal = diagonal(intFrameWidth, intViewportHeight);
    console.log(windowDiagonal);
    return windowDiagonal;
};

var getPercent = function (percent, num){
    return (percent / 100) * num;
};

var getPercentage = function (smallNum, bigNum){
    return (smallNum / bigNum) * 100;
};
