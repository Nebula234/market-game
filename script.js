// let ler
//let hasApple = null;

// variable lar
//var money = 100;
var counterVal = 0;

var apples = 0;


function buyApples() {
  if (counterVal >= 15) {
    console.log("You bought an apple")
    apples++;
    counterVal = counterVal -15; updateDisplay(counterVal) } 
    {
  if (counterVal < 15);
    console.log("You have not enough gold");
  }
}



// function lar
function incrementClick() {
  updateDisplay(++counterVal);
}

function resetCounter() {
  counterVal = 0;
  updateDisplay(counterVal);
}

function updateDisplay(val) {
  document.getElementById("counter-label").innerHTML = val;
}

function buyHelloworld() {
  counterVal - 10;
  console.log("Hello World!")
}


///////////////////////////////

//function buySomeOnions() {
  //if (money >= 10) {
    //onions++;
    //money = money - 10;
  //};
//};