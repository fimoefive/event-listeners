/*
var mainB = document.getElementById("main-btn");
console.log(mainB);

var qB = document.querySelector("#main-btn");
console.log(qB);

const firstObj = {};

const user = {
  username: 'biz.markie',
  password: 'abd123',
  lovesJavascript: true,
  favoriteNumber: 42,
  newObj: {
    keyValue: false,
  }
};

// DOT NOTATION  get values of an object
console.log(user.lovesJavascript);
console.log(user.username);
console.log(user.newObj.keyValue);

// BRACKET NOTATION
console.log(user['password']);
console.log(user['favoriteNumber']);

const passCode = 'password';

// ASSIGNMENT


// METHODS (ANONYMOUS FUNCTIONS

const newObject = {
  username: 'Teresa',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}
newObject.username = 'Aja';
newObject.sayHello();

// ITERATE OVER AN OBJECT
const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz',
  lovesJavascript: true,
  favoriteNumber: 12,
}

for (let key in userTwo) {
  // console.log(key); // keys
  // console.log(userTwo[key]); // values
  console.log(userTwo.key); // DON'T USE will be undefined
}

// CALL BACK FUNCTIONS **********

function sayHelloToUser(user) {
  return `Hey ${user}!`;
}

const sayHi = (user) => {
  return `Hello ${user}`;
}
sayHi("Martin");

function saySomething(user) {
  return `Sup ${user}`;
}
console.log(saySomething('Ben', sayHelloToUser));
console.log(saySomething('Ben', sayHi));
*/

// ADD EVENT LISTENER *****
const button = document.querySelector('#main-btn');
const container = document.querySelector('#second-btn');

const whatIsTheId = (event) => {
  console.log(`YOU CLICKED ${event.target.id}!`);

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON';
  } else {
    container.innerHTML = 'You clicked the Second Button';
  }
};

button.addEventListener('click', whatIsTheId);

// TARGET `other-btn` and on click, run whatIsTheId
const button2 = document.querySelector('#second-btn');

button2.addEventListener('click', whatIsTheId);
