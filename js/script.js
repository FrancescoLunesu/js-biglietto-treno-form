// CREO FUNZIONE CHE SI ATTIVA AL CLICK DEL BOTTONE "genera"

document.getElementById('genera').addEventListener("click", function(){
    // dichiaro le variabili della funzione
    var prezzoFisso = 0.21;
    var km = document.getElementById('km').value;
    var sconto = 0;
    var name = document.getElementById('nome').value;
    var eta = document.getElementById('eta').value;
    // var carrozza;
    document.getElementById('cliente').innerHTML = name;
    // generazione numeri random
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*10) + 1;
    document.getElementById('CP').innerHTML = Math.floor(Math.random()* 10000) + 90000;
    // var offerta = document.getElementById('eta').value;
    // document.getElementById('offerta').innerHTML = offerta;

    // CREO IF PER DETERMINARE IL PREZZO TOTALE E IL MESSAGGIO DI SCONTO CHE COMPARIRA' NEL BIGLIETTO
    var prezzoTotale = prezzoFisso * km;
    if(eta == "Minorenne"){
        sconto = (prezzoTotale * 20) / 100;
        prezzoTotale = prezzoTotale - sconto;
        offerta = "sconto minorenni!";
    } else if( eta == "Over65"){
        sconto = (prezzoTotale * 40) / 100;
        prezzoTotale -= sconto;
        offerta = "sconto over65!";
    } else{
        prezzoTotale = prezzoTotale;
        offerta = "nessuno sconto!";
    }

    // STAMPO I RISULTATI DELL'IF
    document.getElementById('costoTot').innerHTML = prezzoTotale;
    document.getElementById('offerta').innerHTML = offerta;


}
)






















//
//
// var chilometri = parseInt(prompt("Quanti chilometri devi percorrere?"));
// var eta = parseInt(prompt("Quanti anni ha il passeggero?"));
// var prezzoFisso = 0.21;
// var prodotto = prezzoFisso * chilometri;
// var sconto = 0;
// var prezzoFinale = prodotto;
//
// // il prezzo del biglietto è definito in base ai km (0.21 € al km)
// // va applicato uno sconto del 20% per i minorenni
// // va applicato uno sconto del 40% per gli over 65
//
// if (eta < 18) {
//     sconto = (prodotto * 20) / 100;
//     prezzoFinale = prodotto - sconto;
//     document.getElementById('prezzo').innerHTML = "il prezzo da pagare è:" + " " + prezzoFinale;
//
// } else if (eta >= 65) {
//     sconto = (prodotto * 40) / 100;
//     prezzoFinale = prodotto - sconto;
//     document.getElementById('prezzo').innerHTML = "il prezzo da pagare è:" + " " + prezzoFinale;
//
// } else {
//     document.getElementById('prezzo').innerHTML = "il prezzo da pagare è:" + " " + prezzoFinale;
//
// }
