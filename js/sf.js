$(function() {
    /* 
        rows - letters a,b,c,d
        columns - numbers 1,2,3,4
    */ 
    var a1 = $('.a1'),
        a2 = $('.a2'),
        a3 = $('.a3'),
        a4 = $('.a4'),
        b1 = $('.b1'),
        b2 = $('.b2'),
        b3 = $('.b3'),
        b4 = $('.b4'),
        c1 = $('.c1'),
        c2 = $('.c2'),
        c3 = $('.c3'),
        c4 = $('.c4'),
        d1 = $('.d1'),
        d2 = $('.d2'),
        d3 = $('.d3'),
        d4 = $('.d4');

    // innitialize 
    document.querySelector("#frame").remove();

    /* 
        slide-in {that's what she said}
    */

    var row;
    var blockName;
    for (var i=1; i<=4 ; i++) {
        row = String.fromCharCode(96 + i);
        for (var col=1; col<=4 ; col++) {
            blockName = row + col;
            console.log(blockName);

            if (col<=2) {
                $('.' + blockName).addClass('slide-in-left');
            } else {
                $('.' + blockName).addClass('slide-in-right');
            }
        }
    }
});