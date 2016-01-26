$( document ).ready(function() {
    console.log( "document loaded" );
    getViewport();

    $( "div#container" ).click(function() {
        console.log( "container loaded" );
        // $(this).innerHeight = elHeight;
        // $(this).innerWidth = elWidth;
        // var elDiagonal = diagonal(elWidth, elHeight);
        console.log(elDiagonal);
    });

});

$( ".form__btn" ).click(function() {
    getViewport();
});
