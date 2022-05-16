const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
   // 1. changer la couleur du bouton START
   // 2. changer le texte du bouton START
   // 3. changer la couleur du bouton RESET
   // 4. changer le texte du bouton RESET
   // 5. appeler start()
   // 6. mettre a jour les digits

   //1.
   btnLeftElement.className = "btn stop"

   //2.
   btnLeftElement.innerHTML= "STOP"

   //3.
   btnRightElement.className = "btn split"
   //4.
   btnRightElement.innerHTML = "SPLIT"
  //5.6.
   chronometer.start(function () {
     console.log(`${chronometer.split()[4]}`)
     document.getElementById("secUni").innerHTML = `${chronometer.split()[4]}`
     document.getElementById("secDec").innerHTML = `${chronometer.split()[3]}`
     document.getElementById("minUni").innerHTML = `${chronometer.split()[1]}`
     document.getElementById("minDec").innerHTML = `${chronometer.split()[0]}`
   }) 
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  btnRightElement.onclick.innerHtml = "SPLIT"
});
