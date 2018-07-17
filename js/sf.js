/** 
 * rows - letters labelled a,b,c,d
 * columns - numbers labelled 1,2,3,4
 */

$(function() {

    /**
     * reuseable and global variables
     */
    var row;
    var blockName;
    var step = 22.2; // The % of each block
    var dataPoints = {};

    /**
     * helper functions
     */
    function zeroIndexedCoordinates(className) {
        console.log(className);
        var gridX = className.charAt(0).charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        var gridY = className.charAt(1);

        console.log(className + ': { ' + gridX + ', ' + gridY + ' }');

        return {
        x: gridX,
        y: gridY
        };
    }

    function cssTranslate(currentPos, endPos) {

        // calculating the starting and ending positions using the block names, currentPos and endPos
        var pos1 = zeroIndexedCoordinates(currentPos);
        var pos2 = zeroIndexedCoordinates(endPos);

        var finalX = step * (pos2.x - pos1.x);
        var finalY = step * (pos2.y - pos1.y);

        console.log('finalX : ' + finalX + ', finalY : ' + finalY);
        $('.' + currentPos).css('transform', 'translate(' + finalX + '%,' + finalY + '%' + ')');
      
        console.log('Moved ' + currentPos + ' to ' + endPos);
    }

    /**
     * innitial positions of the blocks
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

   /**
    * slide-in {that's what she said}
    */
    for (var i=1; i<=4 ; i++) {
        row = String.fromCharCode('a'.charCodeAt(0) + i - 1);
        for (var col=1; col<=4 ; col++) {
            blockName = row + col;
            $('.' + blockName).addClass('slide-in');
        }
    }

    // cssTranslate('a1', 'c2');

});


// // Store each block in a 2D array
// var blocks = [];
// for (var i = 0; i < 4; i++) {
//   var c = String.fromCharCode('a'.charCodeAt(0) + i);
//   blocks[c] = [];
//   for (var j = 1; j <= 4; j++) {
//     var block = document.querySelector("." + String.fromCharCode('a'.charCodeAt(0) + i) + j);
//     blocks[c][j] = block;
//   }
// }
// console.log(blocks);



// // The pixel width of 1% of the blocks
// var percent = blocks['a'][1].style.width;

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
// cssTranslate(blocks['b'][2], 'a2');
// cssTranslate(blocks['b'][3], 'a3');
// cssTranslate(blocks['c'][2], 'd2');
// cssTranslate(blocks['c'][3], 'd3')
// cssTranslate(blocks['d'][4], 'd3');