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

/*function printTime() {
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
} */

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.innerHTML === "START") {                                 // Si le bouton de gauche affiche START, alors:

    btnLeftElement.className = "btn stop"                                     // on change la couleur du bouton START

    btnLeftElement.innerHTML = "STOP"                                         // on change le texte du bouton START

    btnRightElement.className = "btn split"                                   // on change la couleur du bouton RESET

    btnRightElement.innerHTML = "SPLIT"                                       // on change le texte du bouton RESET

    chronometer.start(function () {                                           //on appelle start() 
      secUniElement.innerHTML = `${chronometer.split()[4]}`                   //on met a jour les digits
      secDecElement.innerHTML = `${chronometer.split()[3]}`
      minUniElement.innerHTML = `${chronometer.split()[1]}`
      minDecElement.innerHTML = `${chronometer.split()[0]}`
    })
  }

  else {                                             // Si le bouton de gauche n'affiche pas start, alors:

    btnLeftElement.className = "btn start"           // on change la couleur du bouton STOP

    btnLeftElement.innerHTML = "START"               // on change le texte du bouton STOP

    btnRightElement.className = "btn reset"          // on change la couleur du bouton SPLIT

    btnRightElement.innerHTML = "RESET"              // on change le texte du bouton SPLIT

    chronometer.stop()                               // on appelle stop() -> le décompte s'arrête
  }
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.innerHTML === "RESET") {        // Si le bouton de droite affiche reset, alors:

    secUniElement.innerHTML = 0                      // on met a jour les digits
    secDecElement.innerHTML = 0
    minUniElement.innerHTML = 0
    minDecElement.innerHTML = 0
    chronometer.reset()                              // on appelle reset()  -> le compteur revient à 0

    splitsElement.innerHTML = ''                     // on efface la liste des splits
  }
  else {                                              // Si le bouton de droite n'affiche pas reset, alors:
    const newLi = document.createElement("li")        // on crée une nouvelle balise <li>
    newLi.setAttribute('class', 'splitTime')          // on donne un nom de classe à notre <li> (pas forcément utile ici)
    splitsElement.appendChild(newLi)                 // on rajoute notre nouvel élément de liste dans <ol id=splits>
    newLi.innerHTML = `${chronometer.split()}`       // on écrit le timer sur notre <li>  
  }
});
