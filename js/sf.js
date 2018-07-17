var productText = document.getElementById('product');

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

function cssTranslate(block, positionName, hideAfter) {

  // It might be hidden at the beginning
  block.style.visibility = 'visible';

  // block is starting position, it can be calculated using the block's name
  var blockName = block.getAttribute('class');
  var pos1 = zeroIndexedCoordinates(blockName);
  var pos2 = zeroIndexedCoordinates(positionName);

  var xDist = step * (pos2.x - pos1.x);
  var yDist = step * (pos2.y - pos1.y);

  var css = 'transform: translate(' + (yDist) + '%, ' + (xDist) + '%);'
  block.setAttribute('style', css);

  console.log('Moved ' + blockName + ' to ' + positionName);

  if (hideAfter) {
    block.style.visibility = 'hidden';
  }
}

var transitions = [];
var transitionTime = 1000; // ms

transitions.push(function () {
  cssTranslate(blocks['b'][2], 'a2', true);
  cssTranslate(blocks['b'][3], 'a3', true);
  cssTranslate(blocks['c'][2], 'd2', true);
  cssTranslate(blocks['c'][3], 'd3', true)
  cssTranslate(blocks['d'][4], 'd3', true);
  productText.textContent = "QuoteFX";
})

transitions.push(function () {
  cssTranslate(blocks['a'][2], 'b2');
  cssTranslate(blocks['a'][3], 'c3');
  cssTranslate(blocks['b'][3], 'a3');
  cssTranslate(blocks['d'][3], 'd4');
  productText.textContent = "QuoteWin";
})

transitions.push(function () {
  cssTranslate(blocks['a'][1], 'a2');
  cssTranslate(blocks['b'][3], 'b3');
  cssTranslate(blocks['a'][4], 'a3');
  cssTranslate(blocks['d'][1], 'd2');
  cssTranslate(blocks['d'][2], 'c2');
  cssTranslate(blocks['d'][3], 'd3');
  productText.textContent = "OEMsTrade";
})

transitions.push(function () {
  cssTranslate(blocks['a'][2], 'a1');
  cssTranslate(blocks['b'][3], 'a4');
  cssTranslate(blocks['d'][2], 'd1');
  cssTranslate(blocks['d'][4], 'd4');
  productText.textContent = "Parts.io";
})


// Finally. change it back to SupplyFrame
transitions.push(function () {
  // TODO: Block arrangement
  productText.textContent = "SupplyFrame";
  var border = document.querySelector(".border");
  border.style.opacity = 100;
})

for (var i = 0; i < transitions.length; i++) {
  setTimeout(transitions[i], i * transitionTime);
}