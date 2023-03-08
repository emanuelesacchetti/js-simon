const numberContDom = document.getElementById('numberContainer');
const messageDom = document.getElementById('message');


const randomNumberList = generateNumberList(); //creo lista di 5 numeri casuali
console.log(randomNumberList);

numberContDom.innerHTML += randomNumberList; //scrivo a schermo i numeri casuali

setTimeout(function(){
    numberContDom.classList.add('d-none')
}, 4000); //dopo 4 secondi i numeri casuali spariscono

let promptNumberList = [];
setTimeout(function(){
     
    for(let i = 0; i < 5; i++){
        let promptNumber = parseInt(prompt('inserisci uno dei 5 numeri che ti ricordi'));
        promptNumberList.push(promptNumber);
    }
    console.log(promptNumberList);

    for ( let i = 0; i < 5; i++){
        if(!randomNumberList.includes(promptNumberList[i])){
            messageDom.innerHTML = 'hai perso';
        }else{
            messageDom.innerHTML = 'hai vinto';
        }
    }


},5000); //dopo 5 secondi escono i prompt



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