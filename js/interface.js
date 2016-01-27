$( document ).ready(function() {
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
});

$( ".form__btn" ).click(function() {
    getViewport();
});
