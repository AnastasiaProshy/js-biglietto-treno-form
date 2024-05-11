'use strict'; //?

// Leggo il Form
const formTicket = document.getElementById('ticket');
console.log(formTicket);



//input form
const userKM = document.getElementById('travel-KM');
console.log(userKM);



// Range input con id: user-years
const userAge = document.getElementById('user-years');
console.log(userAge);

//input current-age
const currentAge = document.querySelector('.current-age');
console.log(currentAge);

//imposto il valore iniziale visualizzato di anni
currentAge.innerText = userAge.value;

//cambia il valore corrente di innerText
userAge.addEventListener('change', function(){
    currentAge.innerText = userAge.value;
})
 






//Invio del Form
formTicket.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log('ho inviato il form');
});



