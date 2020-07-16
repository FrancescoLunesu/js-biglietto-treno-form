// CREO FUNZIONE CHE SI ATTIVA AL CLICK DEL BOTTONE "genera"

document.getElementById('genera').addEventListener("click", function(){
    // dichiaro le variabili della funzione
    var prezzoFisso = 0.21;
    var km = document.getElementById('km').value;
    var sconto = 0;
    var name = document.getElementById('nome').value;
    var eta = document.getElementById('eta').value;
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

// CREO FUNZIONE CHE SI ATTIVA CLICCANDO IL BOTTONE "annulla" e pulisce la tabella
document.getElementById('annulla').addEventListener("click", function(){
    document.getElementById('cliente').innerHTML = " ";
    document.getElementById('offerta').innerHTML = " ";
    document.getElementById('carrozza').innerHTML = " ";
    document.getElementById('CP').innerHTML = " ";
    document.getElementById('costoTot').innerHTML = " ";
}
)
