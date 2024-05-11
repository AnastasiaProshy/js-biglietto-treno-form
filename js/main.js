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
userAge.addEventListener('change', function () {
    currentAge.innerText = userAge.value;
})





//Invio del Form is other program
formTicket.addEventListener('submit', function (event) {
    event.preventDefault();

    const userKM = document.getElementById('travel-KM');
    const userAge = document.getElementById('user-years');

    console.log(userKM.value);
    console.log(userAge.value);

    //operazioni di calcolo


    //risultato del calcolo
    document.getElementById('Result').innerText = 'y';
    document.getElementById('fruit-box').classList.remove('d-none');


});



