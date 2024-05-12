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

//Invio del Form is other program*************************
formTicket.addEventListener('submit', function (event) {
    event.preventDefault();

    const userKM = document.getElementById('travel-KM');
    const userAGE = document.getElementById('user-years');

    console.log(userKM.value);
    console.log(userAGE.value);

    // Dichiarazione della variabile finalResult
    let finalResult;

    //operazioni di calcolo*******************************************************************************************

    //MAIN ALGORITM
    const DefaultPrice = (userKM.value * 0.21).toFixed(2);
    const priceUnder18 = (DefaultPrice - (DefaultPrice * 0.20)).toFixed(2);
    const priceOver65 = (DefaultPrice - (DefaultPrice * 0.40)).toFixed(2);

    //OUTPUT
    const string = `The total price of your trip is `

    if (userAGE.value <= 18) {
        finalResult = string + priceUnder18 + `€. Congratulations, you've received a 20% discount for under 19 years.`;
        console.log(priceUnder18);
    }
    else if (userAGE.value >= 65) {
        finalResult = string + priceOver65 + `€. Congratulations, you've received a 40% discount for over 64 years.`;
        console.log(priceOver65);
    }
    else {
        finalResult = string + DefaultPrice + `€. Unfortunately, there are no discounts available for you.`;
        console.log(DefaultPrice);
    }

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
