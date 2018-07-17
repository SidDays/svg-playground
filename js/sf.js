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

    /*
    reuseable variables
    */
    var row;
    var blockName;

    /*
    innitial positions of the blocks
    */
    for (var i=1; i<=4 ; i++) {
        var x, y , x_mod, y_mod;
        row = String.fromCharCode(96 + i);
        for (var col=1; col<=4 ; col++) {
            blockName = row + col;                        
            x_mod = (col<=2) ? -100 : 100;
            y_mod = (i<=2) ? -100 : 100;
            if($('.' + blockName).hasClass('diagonal')) {
                x = x_mod;
                y = y_mod;
            } else {
                if (i==1) {
                    x = x_mod * 0.5;
                    y = y_mod;
                } else if (i==2) {
                    x = x_mod;
                    y = y_mod * 0.5;
                } else if (i==3) {
                    x = x_mod;
                    y = y_mod * 0.5;
                } else if (i==4) {
                    x = x_mod * 0.5;
                    y = y_mod;
                }
            }
            $('.' + blockName).css('transform', 'translate(' + x + '%,' + y + '%' + ')');
        }
    }

    /* 
        slide-in {that's what she said}
    */
    for (var i=1; i<=4 ; i++) {
        row = String.fromCharCode(96 + i);
        for (var col=1; col<=4 ; col++) {
            blockName = row + col;

            if (col<=2) {
                $('.' + blockName).addClass('slide-in-left');
            } else {
                $('.' + blockName).addClass('slide-in-right');
            }
        }
    }
});