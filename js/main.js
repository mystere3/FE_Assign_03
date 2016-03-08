function divisibleByThree() {
  var result = '';
  
  for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      result += i + ' ';
      
    }
  }
  $('#ex1_result').html(result);
}

function drawTree(height) {
  var tree = "";
  for (var i = 1; i <= height; i++) {       // Cycles Each line of tree
    
    // for (var j = i; j <= height - 1; j++) { // Adds spaces before stars
    //   tree += " ";
    // }
    var starCount = i * 2 - 1;              // Calculates how many stars then adds them
    for (var k = 0; k < starCount; k++) {
      tree += '*';
    }
    tree += "<br>"
  }
  $('#ex2_result').html(tree);
}

function fizzBuzz() {
  var result = "";
  for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz <br>';
    } else if (i % 3 === 0) {
      result += 'Fizz <br>';
    } else if (i % 5 === 0) {
      result += 'Buzz <br>';
    } else {
      result += i + '<br>';
    }
  }
  $('#ex3_result').html(result);
}


$(function() {
  // $('#ex1_button').click(divisibleByThree());
  $("#treeForm").submit(function(e) {
    e.preventDefault();
    var height = parseInt(document.forms["treeForm"]["treeHeight"].value);
    drawTree(height);
  })

})








