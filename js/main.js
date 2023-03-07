const numberContDom = document.getElementById('numberContainer');

const randomNumberList = generateNumberList();
console.log(randomNumberList);

numberContDom.innerHTML += randomNumberList;

setTimeout(function(){ 
    numberContDom.classList.add('d-none')}, 2000);
/*
setTimeout(esciIPrompt, 3000);
    
function esciIPrompt(){
const promptNumberList = [];
for(let i = 0; i < 5; i++){
    let number = parseInt(prompt('inserisci uno dei 5 numeri che ti ricordi'));
    if(!promptNumberList.includes(number)){
        console.log('hai perso')
    }
    promptNumberList.push(number);
}
console.log('hai vinto');
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