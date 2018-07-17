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
var percent =blocks['a'][1].style.width;