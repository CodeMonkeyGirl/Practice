function stepFizzBuzz() {
    var classes, content;
    ++counter;

    // todo: optimize this part with functional programming
    if (counter%15 == 0) {
        classes = "box fizzbuzzbox";
        content = "FizzBuzz!";
    } else if (counter%3 == 0) {
        classes = "box fizzbox";
        content = "Fizz";
    } else if (counter%5 == 0) {
        classes = "box buzzbox";
        content = "Buzz";
    } else {
        classes = "box";
        content = counter;
    }

    // add to section
    var newbox = document.createElement('div');
    newbox.className = classes;
    newbox.innerHTML = content;
    document.getElementById("fizzbuzzboxes").appendChild(newbox);
}

function ready() {
    var goFizzBuzz = document.getElementById("goFizzBuzz");
    goFizzBuzz.addEventListener("click", stepFizzBuzz, false);
}

var counter = 0;
document.addEventListener("DOMContentLoaded", ready, false);
