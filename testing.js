///testing///

/// test 1 /// if else

let score = 100;

if (score > 1000) {
  score = score +100;
}
else if (score === 1000) {
  console.log("Almost!");
}
else {
  console.log("Nice try!");
}

console.log( "Score is:", score );

/// test 2 /// Switch Case

let state = 'TX';
switch (state) {
  case 'NY':
    console.log('New York');
    break;
  case 'TX':
    console.log('Texas');
    break;
  default: ("Unknown")
    break;
}

/// test 3 /// For loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

/// test 4 /// While loop

let count = 1;
while (count <= 5 ) {
  console.log(count);
  count++;
}

/// test 5 /// Functions

function showMessage(message){
  console.log(message);
}

showMessage('First Message');
showMessage('Second Message');

/// test 6 /// Functions

function showMessages(message, anotherMessage){
  console.log(message, anotherMessage);
}

showMessages('First Message', 'Second Message');

/// test 7 /// Functions

function myFunction(message, favoriteNumber){
  message = message + ' World!';
  console.log( message, favoriteNumber );
}

myFunction('Hello', 42);

/// test 8 /// Functions

 function MyFavoriteNumber( favoriteNumberOfAll ) {

 let newNumber = favoriteNumberOfAll + 100;
 return newNumber;
 }

 let result = MyFavoriteNumber(42);
 console.log(result);

 /// test 9 /// Objects

let person = {
  name: "John",
  age: 32,
  partTime: false
};

console.log(person.name);
console.log(person.age);
console.log(person.partTime);

/// test 10 /// Objects

/*let card = {
  suit: "Hearts",
  value: "Queen"
};

console.log(card.suit);
console.log(card.value);*/

/// test 11 /// Passing Objects to Functions

function changeCard(card){
  card.suit = "Clubs";
}

let card = {
  suit: "Hearts",
  value: "Queen"
};

changeCard(card);

console.log(card.suit);

/// test 12 /// Arrays of Objects

let cards = [
{
  suit: "Hearts",
  valuex: "Queen"
},
{
  suit: "Clubs",
  valuex: "King"
}
];

console.log( cards[1].valuex );

/// test 13 /// changing text

/*let textArea = document.getElementById('text-area');
textArea.innerText = 'Hello World';*/

/// test 14 /// handling a button click

/*let okButton = document.getElementById('ok-button');

okButton.addEventListener('click', function(){

  textArea.innerText = 'Button clicked!';

});*/

/// test 15 /// Removing and Adding Elements

let textArea = document.getElementById('text-area');
let okButton = document.getElementById('ok-button');

textArea.style.display = 'none';

okButton.addEventListener('click', function(){


textArea.style.display = 'block';

});
