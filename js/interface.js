$( document ).ready(function() {
    "use strict";
    console.log( "document loaded" );
    var foo = getViewport();
    console.log(foo);



    $( "div#container" ).click(function() {
        console.log( "container loaded" );
        var elHeight = $(this).innerHeight();
        var elWidth = $(this).innerWidth();
        var elDiagonal = diagonal(elWidth, elHeight);
        console.log(elDiagonal);
        console.log(getPercentage(elDiagonal,foo));
    });

    // $( "div#container > img" ).click(function(elDiagonal) {
    //     var imHeight = $('div#container > img').innerHeight();
    //     var imWidth = $('div#container > img').innerWidth();
    //     var imDiagonal = diagonal(imWidth, imHeight);
    //     console.log(imDiagonal);
    //     console.log(getPercentage(imDiagonal,elDiagonal));
    // });

});

$( ".form__btn" ).click(function() {
    getViewport();
});
