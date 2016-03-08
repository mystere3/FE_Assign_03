function divisibleByThree() {
  var result = [];
  
  for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(i);
      result[result.length] = i;
    }
  }
  return result;
}

function drawTree(height) {
  var line;
  for (var i = 1; i <= height; i++) {       // Cycles Each line of tree
    line = "";
    for (var j = i; j <= height - 1; j++) { // Adds spaces before stars
      line += " ";
    }
    var starCount = i * 2 - 1;              // Calculates how many stars then adds them
    for (var k = 0; k < starCount; k++) {
      line += '*';
    }
    console.log(line);
  }
  
}

function fizzBuzz() {
  for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}