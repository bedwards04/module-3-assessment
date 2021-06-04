const favColor = document.querySelector('#color');
function favColorAlert() {
    alert('Blue')
}
favColor.addEventListener('click', favColorAlert);

const favPlace = document.querySelector('#place');
function favPlaceAlert() {
    alert('Western New York')
}
favPlace.addEventListener('click', favPlaceAlert);

const favRitual = document.querySelector('#ritual');
function favRitualAlert() {
    alert('Journaling in the morning')
}
favRitual.addEventListener('click', favRitualAlert);

// PLAY WITH LATER
// for (let i = 0; i < favorites.length; i++) {
//     favorites[i].addEventListener('click', buttonAlerts);
// }
