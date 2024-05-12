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

let finalResult;

//Invio del Form is other program*************************
formTicket.addEventListener('submit', function (event) {
    event.preventDefault();

    const userKM = document.getElementById('travel-KM');
    const userAGE = document.getElementById('user-years');

    const DefaultPrice = (userKM.value * 0.21).toFixed(2);

    //OUTPUT
    const string = `The total price of your trip is € `

    if (userAGE.value == 2) {
        finalResult = string + (DefaultPrice - (DefaultPrice * 0.20)).toFixed(2);;
        console.log(userKM);
    }
    else if (userAGE.value == 3) {
        finalResult = string + (DefaultPrice - (DefaultPrice * 0.40)).toFixed(2);
        console.log(userKM);
    }
    else {
        finalResult = string + DefaultPrice;
        console.log(userKM);
    }

    console.log(userKM.value);
    console.log(userAGE.value);


    //risultato del calcolo********************************************************************************************
    document.getElementById('Result').innerText = finalResult;
    document.getElementById('fruit-box').classList.remove('d-none');

});

//bottone reset
document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('Result').innerText = ''; //svuota campo di testo
    document.getElementById('fruit-box').classList.add('d-none'); //elimina contenitore di resultato
    document.querySelector('.current-age').innerText = '';
});


