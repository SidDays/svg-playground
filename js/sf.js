/** 
 * rows - letters labelled a,b,c,d
 * columns - numbers labelled 1,2,3,4
 */
$(function() {
    /**
     * re-useable and global variables
     */
    var row;
    var blockName;
    var step = 22.2; // The % of each block

    /**
     * helper function
     */
    function zeroIndexedCoordinates(className) {
        console.log(className);
        var gridX = className.charAt(1);
        var gridY = className.charAt(0).charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        // console.log('gridX : ' + gridX+ ', gridY : '+ gridY);
        return {
            x: gridX,
            y: gridY
        };
    }

    function cssTranslate(currentPos, endPos) {

        // calculating the starting and ending positions using the block names, currentPos and endPos
        var pos1 = zeroIndexedCoordinates(currentPos);
        var pos2 = zeroIndexedCoordinates(endPos);
        console.log('pos1 : ' + pos1.x + ', ' + pos1.y + ' - pos2 : ' + pos2.x + ', ' + pos2.y);

        var finalX = step * (pos2.x - pos1.x);
        var finalY = step * (pos2.y - pos1.y);

        console.log('finalX : ' + finalX + ', finalY : ' + finalY);
        $('.' + currentPos).css('transform', 'translate(' + finalX + '%,' + finalY + '%' + ')');

        // if (hideAfter) {
        //     console.log('check');
        //     setTimeout(function () {
        //         $('.' + currentPos).css('opacity', '0');
        //     }, transitionTime * 0.8);
        // }
      
        console.log('Moved ' + currentPos + ' to ' + endPos);
    }

    $('.block').addClass('.jerk');

    /*
     * innitial positions of the blocks
     */
    for (var i=1; i<=4 ; i++) {
        var x, y , x_mod, y_mod;
        row = String.fromCharCode(96 + i);
        for (var col=1; col<=4 ; col++) {
            blockName = row + col;                        
            x_mod = (col<=2) ? -100 : 100;
            y_mod = (i<=2) ? -100 : 100;
            if (i+col==5 || i==col) { //diagonals
                x = x_mod;
                y = y_mod;
            } else {
                if (i==1 || i==4) {
                    x = x_mod * 0.5;
                    y = y_mod;
                } else if (i==2 || i==3) {
                    x = x_mod;
                    y = y_mod * 0.5;
                }
            }
            $('.' + blockName).css('transform', 'translate(' + x + '%,' + y + '%' + ')');
        }
    }

    /*
     * slide-in
     */
    
    var transitions = [];
    var transitionTime = 1000; // ms

    setTimeout(function () {     
        $('.block').removeClass('jerk');
        // $('.block').addClass('slide-in');
        $('.block').css('transform', 'translate(0%, 0%)');
    }, transitionTime);

    // transitions.push(function () {
    //   var border = document.querySelector(".border");
    //   border.style.opacity = 0;
    //   productText.textContent = "SupplyFrame";
    // });

    transitions.push(function () {
        cssTranslate('b2', 'a2');
        cssTranslate('b3', 'a3');
        cssTranslate('c2', 'd2');
        cssTranslate('c3', 'd3')
        cssTranslate('d4', 'd3');
        // productText.textContent = "QuoteFX";
    });
    
        
        // cssTranslate('b3', 'a3', true);
        // productText.textContent = "QuoteFX";
    // })

    // console.log(transitions);
    // setTimeout(transitions[0], transitionTime);

    // transitions.push(function () {
    //     cssTranslate('a2', 'b2');
    //     cssTranslate('a3', 'c3');
    //     cssTranslate('b3', 'a3');
    //     cssTranslate('d3', 'd4');
    //     productText.textContent = "QuoteWin";
    // })

    // transitions.push(function () {
    //     cssTranslate('a1', 'a2');
    //     cssTranslate('b3', 'b3');
    //     cssTranslate('a4', 'a3');
    //     cssTranslate('d1', 'd2');
    //     cssTranslate('d2', 'c2');
    //     cssTranslate('d3', 'd3');
    //     productText.textContent = "OEMsTrade";
    // })

    // transitions.push(function () {
    //     cssTranslate('a2', 'a1');
    //     cssTranslate('b3', 'a4');
    //     cssTranslate('d2', 'd1');
    //     cssTranslate('d4', 'd4');
    //     productText.textContent = "Parts.io";
    // })

    // transitions.push(function () {
    // // Values beyond the grid will still work
    //     cssTranslate('b4', 'b6', true);
    //     cssTranslate('a3', 'c-1');
    //     cssTranslate('c1', 'c-1', true);
    //     productText.textContent = "SupplyFX";
    // })

    // transitions.push(function () {
    //     cssTranslate('a2', 'b1');
    //     cssTranslate('b3', 'a3', true);
    //     cssTranslate('b1', 'c1');
    //     cssTranslate('c4', 'b4');
    //     cssTranslate('d2', 'd2', true);
    //     cssTranslate('d4', 'c4');
    //     productText.textContent = "Findchips";
    // })

    // transitions.push(function () {
    //     cssTranslate('a1', 'a1');
    //     cssTranslate('a4', 'a4');
    //     cssTranslate('a2', 'b2');
    //     cssTranslate('c4', 'b3');
    //     cssTranslate('b1', 'c2');
    //     cssTranslate('d4', 'c3');
    //     cssTranslate('d1', 'd1');
    //     cssTranslate('d3', 'd4');
    //     productText.textContent = "Hackaday.io";
    // })

    // transitions.push(function () {
    // // jerk b2, b3
    // // cssTranslate('b2', 'a2', false, true);
    // // cssTranslate('b3', 'a3', false, true);
    //     cssTranslate('b2', 'b2');
    //     cssTranslate('b3', 'b3');


    //     cssTranslate('a2', 'b1');
    //     cssTranslate('c4', 'b4');

    // // jerk c2, c3
    // // cssTranslate('c2', 'c2', false, true);
    // // cssTranslate('c3', 'c3', false, true);
    //     cssTranslate('c2', 'd2');
    //     cssTranslate('c3', 'd3');

    //     cssTranslate('d1', 'c1');
    //     cssTranslate('d3', 'c4');
    //     productText.textContent = "Tindie";
    // })

    // transitions.push(function () {
    //     cssTranslate('a4', 'b4');
    //     cssTranslate('b2', 'a2');
    //     cssTranslate('b3', 'a3');
    //     cssTranslate('c4', 'c4');
    //     cssTranslate('d4', 'b3');
    //     cssTranslate('d3', 'd4');
    //     productText.textContent = "DesignLab";
    // })

    // transitions.push(function () {
    //     cssTranslate('b2', 'b2');
    //     cssTranslate('b3', 'a4');
    //     cssTranslate('c2', 'd1');
    //     cssTranslate('c3', 'c3');
    //     productText.textContent = "Hackaday.com";
    // })

    // transitions.push(function () {
    //     cssTranslate('b2', 'a2');
    //     cssTranslate('d4', 'a3');
    //     cssTranslate('a4', 'b1', true);
    //     cssTranslate('c4', 'c1', true);
    //     cssTranslate('d3', 'd1', true);
    //     productText.textContent = "EEFocus";
    // })

    // transitions.push(function () {
    //     cssTranslate('a2', 'b4');
    //     cssTranslate('c4', 'c4');
    //     cssTranslate('d3', 'd4');
    //     productText.textContent = "API";
    // })

    // // Finally. change it back to SupplyFrame
    // transitions.push(function () {
    //     cssTranslate('a3', 'b1');
    //     cssTranslate('b4', 'b3');
    //     cssTranslate('a4', 'b2');
    //     cssTranslate('c1', 'd2');
    //     cssTranslate('d2', 'd3');
    //     productText.textContent = "SupplyFrame";
    //     var border = document.querySelector(".border");
    //     border.style.opacity = 100;
    // })

    for (var i = 0; i < transitions.length; i++) {
        setTimeout(transitions[i], (i+2) * transitionTime);
    }
});




// // Store each block in a 2D array
// var blocks = [];
// for (var i = 0; i < 4; i++) {
//   var c = String.fromCharCode('a'.charCodeAt(0) + i);
//   c] = [];
//   for (var j = 1; j <= 4; j++) {
//     var block = document.querySelector("." + String.fromCharCode('a'.charCodeAt(0) + i) + j);
//     c][j] = block;
//   }
// }
// console.log(blocks);



// // The pixel width of 1% of the blocks
// var percent = 'a1'.style.width;

// /**
//  * Get the 0-indexed integer coordinates 
//  * @param {*} className For example, .a1, .a2
//  */
// function zeroIndexedCoordinates(className) {
//   var x = className.charCodeAt(0) - 'a'.charCodeAt(0);
//   var y = parseInt(className.charAt(1) - 1);

//   console.log(className + ': { ' + x + ', ' + y + ' }');

//   return {
//     x: x,
//     y: y
//   };
// }

// function cssTranslate(block, positionName) {

//   // block is starting position, it can be calculated using the block's name
//   var blockName = block.getAttribute('class');
//   var pos1 = zeroIndexedCoordinates(blockName);
//   var pos2 = zeroIndexedCoordinates(positionName);

//   var xDist = step * (pos2.x - pos1.x);
//   var yDist = step * (pos2.y - pos1.y);

//   var css = 'transform: translate(' + (yDist) + '%, ' + (xDist) + '%);'
//   block.setAttribute('style', css);

//   console.log('Moved ' + blockName + ' to ' + positionName);
// }

// // SupplyFrame to QuoteFX
// cssTranslate('b2', 'a2');
// cssTranslate('b3', 'a3');
// cssTranslate('c2', 'd2');
// cssTranslate('c3', 'd3')
// cssTranslate('d4', 'd3');