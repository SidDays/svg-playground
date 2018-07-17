// Store each block in a 2D array
var blocks = [];
for (var i = 0; i < 4; i++) {
  var c = String.fromCharCode('a'.charCodeAt(0) + i);
  blocks[c] = [];
  for (var j = 1; j <= 4; j++) {
    var block = document.querySelector("." + String.fromCharCode('a'.charCodeAt(0) + i) + j);
    blocks[c][j] = block;
  }
}

// The % of each block
var step = 22.2;

// The pixel width of 1% of the blocks
var percent = blocks['a'][1].style.width;

/**
 * Get the 0-indexed integer coordinates 
 * @param {*} className For example, .a1, .a2
 */
function zeroIndexedCoordinates(className) {
  var x = className.charCodeAt(0) - 'a'.charCodeAt(0);
  var y = parseInt(className.charAt(1) - 1);

  console.log(className + ': { ' + x + ', ' + y + ' }');

  return {
    x: x,
    y: y
  };
}

function cssTranslate(block, positionName) {

  // block is starting position, it can be calculated using the block's name
  var blockName = block.getAttribute('class');
  var pos1 = zeroIndexedCoordinates(blockName);
  var pos2 = zeroIndexedCoordinates(positionName);

  var xDist = step * (pos2.x - pos1.x);
  var yDist = step * (pos2.y - pos1.y);

  var css = 'transform: translate(' + (yDist) + '%, ' + (xDist) + '%);'
  block.setAttribute('style', css);

  console.log('Moved ' + blockName + ' to ' + positionName);
}

// SupplyFrame to QuoteFX
cssTranslate(blocks['b'][2], 'a2');
cssTranslate(blocks['b'][3], 'a3');
cssTranslate(blocks['c'][2], 'd2');
cssTranslate(blocks['c'][3], 'd3')
cssTranslate(blocks['d'][4], 'd3');