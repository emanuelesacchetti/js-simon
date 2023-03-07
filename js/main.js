//debugger;
const numberContDom = document.getElementById('numberContainer');

const randomNumberList = generateNumberList(); //creo lista di 5 numeri casuali
console.log(randomNumberList);
 //creo una lista vuota per mettere i numeri dei prompt

numberContDom.innerHTML += randomNumberList; //scrivo a schermo i numeri casuali

setTimeout(function(){numberContDom.classList.add('d-none')}, 2000); //dopo 2 secondi i numeri casuali spariscono
const promptNumberList = [];
setTimeout(numeriPrompt(promptNumberList), 10000); //dopo 7 secondi escono i prompt
console.log(promptNumberList);
   
function numeriPrompt(listaNumeriScelti){
    //let listaNumeriScelti = [];
    for(let i = 0; i < 5; i++){
        let number = parseInt(prompt('inserisci uno dei 5 numeri che ti ricordi'));
        listaNumeriScelti.push(number);
    }
    return listaNumeriScelti;
}
/*
function esciIPrompt (listaNumeriRandomici){
    let valid = false;
    
    let number;

    //da correggere con il for chiedendo solo 5 volte
    do{
        number = parseInt(prompt('inserisci uno dei 5 numeri che ti ricordi'));

        

    }while(!valid);
    //questo !valid equivale finchè valid = false allora !valid = true*/

    //fai con un ciclo tuo a piacere controlli quali numeri dell'utente sono diversi dai numeri indcati
    // devi indicare poi il risultato nella pagina html

    /*
    if(!listaNumeriRandomici.includes(number)){
        valid = true
        console.log('hai perso');
    }else{

    }*/
    


function genearateRandomNumber (min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function generateUniqueRandomNumber (list, min, max){
    let control = false;
    let uniqueNumber;
    while(!control){
        uniqueNumber = genearateRandomNumber (min, max);
        if(!list.includes(uniqueNumber)){
            control = true;
        }
    }
    return uniqueNumber;
}

function generateNumberList (){
    const list = [];
    for ( let i = 0; i < 5; i++){
        list.push(generateUniqueRandomNumber(list, 1, 100));
    }
    return list;
}