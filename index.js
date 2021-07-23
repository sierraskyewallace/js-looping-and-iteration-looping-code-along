// Code your solutions in this file



function writeCards(names, eventName){
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        cards[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    }
    return cards;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number -= 1;
    }
} 
