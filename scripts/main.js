
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
