/** 
 * rows - letters labelled a,b,c,d
 * columns - numbers labelled 1,2,3,4
 */
$(function() {
    // re-useable and global variables
    var row;
    var blockName;
    var step = 22.2; // The % of each block

    /*
     * Helper functions() => [zeroIndexedCoordinates, cssTranslate]
     */

    // calculates blocks (x,y) co-ordinates based on className
    function zeroIndexedCoordinates(className) {
        var charX = (className.length > 2) ? className.charAt(2) : className.charAt(1);
        var gridX = charX.charCodeAt(0) - '1'.charCodeAt(0) + 1;
        var gridY = className.charAt(0).charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        return {
            x: gridX,
            y: gridY
        };
    }

    // calculates the starting and ending positions using the block names (currentPos and endPos)
    function cssTranslate(currentPos, endPos, hideAfter) {

        // unhiding previously hidden blocks
        $('.' + currentPos).css('opacity', '1');

        var pos1 = zeroIndexedCoordinates(currentPos);
        var pos2 = zeroIndexedCoordinates(endPos);

        var finalX = step * (pos2.x - pos1.x);
        var finalY = step * (pos2.y - pos1.y);

        $('.' + currentPos).css('transform', 'translate(' + finalX + '%,' + finalY + '%' + ')');

        if (hideAfter) {
            setTimeout(function () {
                $('.' + currentPos).css('opacity', '0');
            }, transitionTime * 0.2);
        }
      
    }

    
    var transitions = [];
    var transitionTime = 500; // ms

    $('.block').css('transform', 'translate(0%, 0%)');

    transitions.push(function () {
        cssTranslate('b2', 'a2', true);
        cssTranslate('b3', 'a3', true);
        cssTranslate('c2', 'd2', true);
        cssTranslate('c3', 'd3', true)
        cssTranslate('d4', 'd3', true);
    });

    transitions.push(function () {
        cssTranslate('a2', 'b2');
        cssTranslate('a3', 'c3');
        cssTranslate('b3', 'a3');
        cssTranslate('d3', 'd4');
    });

    transitions.push(function () {
        cssTranslate('a1', 'a2');
        cssTranslate('b3', 'b3');
        cssTranslate('a4', 'a3');
        cssTranslate('d1', 'd2');
        cssTranslate('d2', 'c2');
        cssTranslate('d3', 'd3');
    })

    transitions.push(function () {
        cssTranslate('a2', 'a1');
        cssTranslate('b3', 'a4');
        cssTranslate('d2', 'd1');
        cssTranslate('d4', 'd4');
    });

    transitions.push(function () {
    // Values beyond the grid will still work
        cssTranslate('b4', 'b6', true);
        cssTranslate('a3', 'f3', true);
        cssTranslate('c1', 'c0/', true);
    })

    transitions.push(function () {
        cssTranslate('a2', 'b1');
        cssTranslate('b3', 'a3', true);
        cssTranslate('b1', 'c1');
        cssTranslate('c4', 'b4');
        cssTranslate('d2', 'd2', true);
        cssTranslate('d4', 'c4');
    })

    transitions.push(function () {
        cssTranslate('a1', 'a1');
        cssTranslate('a4', 'a4');
        cssTranslate('a2', 'b2');
        cssTranslate('c4', 'b3');
        cssTranslate('b1', 'c2');
        cssTranslate('d4', 'c3');
        cssTranslate('d1', 'd1');
        cssTranslate('d3', 'd4');
    });

    transitions.push(function () {
    // jerk b2, b3
    // cssTranslate('b2', 'a2', false, true);
    // cssTranslate('b3', 'a3', false, true);
        cssTranslate('b2', 'b2');
        cssTranslate('b3', 'b3');
        cssTranslate('a2', 'b1');
        cssTranslate('c4', 'b4');

    // jerk c2, c3
    // cssTranslate('c2', 'c2', false, true);
    // cssTranslate('c3', 'c3', false, true);
        cssTranslate('c2', 'd2');
        cssTranslate('c3', 'd3');

        cssTranslate('d1', 'c1');
        cssTranslate('d3', 'c4');
    })

    transitions.push(function () {
        cssTranslate('a4', 'b4');
        cssTranslate('b2', 'a2');
        cssTranslate('b3', 'a3');
        cssTranslate('c4', 'c4');
        cssTranslate('d4', 'b3');
        cssTranslate('d3', 'd4');
    });

    transitions.push(function () {
        cssTranslate('b2', 'b2');
        cssTranslate('b3', 'a4');
        cssTranslate('c2', 'd1');
        cssTranslate('c3', 'c3');
    })

    transitions.push(function () {
        cssTranslate('b2', 'a2');
        cssTranslate('d4', 'a3');
        cssTranslate('a4', 'b1', true);
        cssTranslate('c4', 'c1', true);
        cssTranslate('d3', 'd1', true);
    });

    transitions.push(function () {
        cssTranslate('a2', 'b4');
        cssTranslate('c4', 'c4');
        cssTranslate('d3', 'd4');
    });

    // Finally change it back to SupplyFrame
    transitions.push(function () {
        for (var i=1; i<=4 ; i++) {
            row = String.fromCharCode(96 + i);
            for (var col=1; col<=4 ; col++) {
                blockName = row + col;
                cssTranslate('' + blockName, '' + blockName);
            }
        }
        $('.frame').css('visibility', 'visible');        
    });

    // transitions.push( function () {
    //     $('.svg').css('transform', 'scale(1.2)');
    // });

    transitions.push( function () {
        $('.svg').addClass('outro');
    });

    var sum = 0;
    for (var i = 0; i < transitions.length; i++) {
        sum = i + sum;
        // time = ((i+2)*transitionTime - (sum*25));
        time = ((i+1)*transitionTime);
        console.log(time);
        setTimeout(transitions[i], time);
    }
});


// written but unused - 

/*
* innitial positions of the blocks
*/
// for (var i=1; i<=4 ; i++) {
//     var x, y , x_mod, y_mod;
//     row = String.fromCharCode(96 + i);
//     for (var col=1; col<=4 ; col++) {
//         blockName = row + col;                        
//         x_mod = (col<=2) ? -100 : 100;
//         y_mod = (i<=2) ? -100 : 100;
//         if (i+col==5 || i==col) { // diagonal blocks
//             x = x_mod;
//             y = y_mod;
//         } else { // non-diagonal blocks
//             if (i==1 || i==4) {
//                 x = x_mod * 0.5;
//                 y = y_mod;
//             } else if (i==2 || i==3) {
//                 x = x_mod;
//                 y = y_mod * 0.5;
//             }
//         }
//         $('.' + blockName).css('transform', 'translate(' + x + '%,' + y + '%' + ')');
//     }
// }

// console.log('pos1 : ' + pos1.x + ', ' + pos1.y + ' - pos2 : ' + pos2.x + ', ' + pos2.y);
// console.log('finalX : ' + finalX + ', finalY : ' + finalY);
// console.log('Moved ' + currentPos + ' to ' + endPos);

// $('.product').html("QuoteFX");
// $('.product').html("QuoteWin");
// $('.product').html("OEMsTrade");
// $('.product').html("Parts.io");
// $('.product').html("SupplyFX");
// $('.product').html("Findchips");
// $('.product').html("Hackaday.io");
// $('.product').html("Tindie");
// $('.product').html("DesignLab");
// $('.product').html("Hackaday.com");
// $('.product').html("EEFocus");
// $('.product').html("API");
// $('.product').html("Supplyframe");
// var border = document.querySelector(".border");
// border.style.opacity = 100;
