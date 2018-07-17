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
  var y = parseInt(className.substring(1)) - 1;

  // console.log(className + ': { ' + x + ', ' + y + ' }');

  return {
    x: x,
    y: y
  };
}

function cssTranslate(block, positionName, hideAfter, jerk) {

  // FIXME: Jerk doesn't work
  // if (jerk) {
  //   block.classList.add('jerk');
  // }

  // It might be hidden at the beginning
  block.style.opacity = '100';

  // block is starting position, it can be calculated using the block's name
  var blockName = block.getAttribute('class');
  var pos1 = zeroIndexedCoordinates(blockName);
  var pos2 = zeroIndexedCoordinates(positionName);

  var xDist = step * (pos2.x - pos1.x);
  var yDist = step * (pos2.y - pos1.y);

  var css = 'transform: translate(' + (yDist) + '%, ' + (xDist) + '%);'
  block.setAttribute('style', css);

  // console.log('Moved ' + blockName + ' to ' + positionName);

  if (hideAfter) {
    setTimeout(function () {
      block.style.opacity = '0';
    }, transitionTime * 0.8);
  }

  // if (jerk) {
  //   block.classList.remove('jerk');
  // }
}

var transitions = [];
var transitionTime = 1200; // ms

// transitions.push(function () {
//   var border = document.querySelector(".border");
//   border.style.opacity = 0;
//   productText.textContent = "SupplyFrame";
// });

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

transitions.push(function () {
  // Values beyond the grid will still work
  cssTranslate(blocks['b'][4], 'b6', true);
  cssTranslate(blocks['a'][3], 'c-1');
  cssTranslate(blocks['c'][1], 'c-1', true);
  productText.textContent = "SupplyFX";
})

transitions.push(function () {
  cssTranslate(blocks['a'][2], 'b1');
  cssTranslate(blocks['b'][3], 'a3', true);
  cssTranslate(blocks['b'][1], 'c1');
  cssTranslate(blocks['c'][4], 'b4');
  cssTranslate(blocks['d'][2], 'd2', true);
  cssTranslate(blocks['d'][4], 'c4');
  productText.textContent = "Findchips";
})

transitions.push(function () {
  cssTranslate(blocks['a'][1], 'a1');
  cssTranslate(blocks['a'][4], 'a4');
  cssTranslate(blocks['a'][2], 'b2');
  cssTranslate(blocks['c'][4], 'b3');
  cssTranslate(blocks['b'][1], 'c2');
  cssTranslate(blocks['d'][4], 'c3');
  cssTranslate(blocks['d'][1], 'd1');
  cssTranslate(blocks['d'][3], 'd4');
  productText.textContent = "Hackaday.io";
})

transitions.push(function () {
  // jerk b2, b3
  // cssTranslate(blocks['b'][2], 'a2', false, true);
  // cssTranslate(blocks['b'][3], 'a3', false, true);
  cssTranslate(blocks['b'][2], 'b2');
  cssTranslate(blocks['b'][3], 'b3');


  cssTranslate(blocks['a'][2], 'b1');
  cssTranslate(blocks['c'][4], 'b4');

  // jerk c2, c3
  // cssTranslate(blocks['c'][2], 'c2', false, true);
  // cssTranslate(blocks['c'][3], 'c3', false, true);
  cssTranslate(blocks['c'][2], 'd2');
  cssTranslate(blocks['c'][3], 'd3');

  cssTranslate(blocks['d'][1], 'c1');
  cssTranslate(blocks['d'][3], 'c4');
  productText.textContent = "Tindie";
})

transitions.push(function () {
  cssTranslate(blocks['a'][4], 'b4');
  cssTranslate(blocks['b'][2], 'a2');
  cssTranslate(blocks['b'][3], 'a3');
  cssTranslate(blocks['c'][4], 'c4');
  cssTranslate(blocks['d'][4], 'b3');
  cssTranslate(blocks['d'][3], 'd4');
  productText.textContent = "DesignLab";
})

transitions.push(function () {
  cssTranslate(blocks['b'][2], 'b2');
  cssTranslate(blocks['b'][3], 'a4');
  cssTranslate(blocks['c'][2], 'd1');
  cssTranslate(blocks['c'][3], 'c3');
  productText.textContent = "Hackaday.com";
})

transitions.push(function () {
  cssTranslate(blocks['b'][2], 'a2');
  cssTranslate(blocks['d'][4], 'a3');
  cssTranslate(blocks['a'][4], 'b1', true);
  cssTranslate(blocks['c'][4], 'c1', true);
  cssTranslate(blocks['d'][3], 'd1', true);
  productText.textContent = "EEFocus";
})

transitions.push(function () {
  cssTranslate(blocks['a'][2], 'b4');
  cssTranslate(blocks['c'][4], 'c4');
  cssTranslate(blocks['d'][3], 'd4');
  productText.textContent = "API";
})

// Finally. change it back to SupplyFrame
transitions.push(function () {
  cssTranslate(blocks['a'][3], 'b1');
  cssTranslate(blocks['b'][4], 'b3');
  cssTranslate(blocks['a'][4], 'b2');
  cssTranslate(blocks['c'][1], 'd2');
  cssTranslate(blocks['d'][2], 'd3');
  productText.textContent = "SupplyFrame";
  var border = document.querySelector(".border");
  border.style.opacity = 100;
})

for (var i = 0; i < transitions.length; i++) {
  setTimeout(transitions[i], i * transitionTime);
}