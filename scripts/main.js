console.log("EventListeners");

// ************ OBJECTS ***********
/*
const firstObj = {};

const user = {
  username: 'biz.markie',
  password: 'abd123',
  lovesJavascript: true,
  favoriteNumber: 42,
}

// DOT NOTATION
// Get values out of an object
// console.log(user.lovesJavascript);
// console.log(user.username);

// BRACKET NOTATION
const passCode = 'password';
console.log(user[passCode]);
// console.log(user['username']);

// ASSIGNING VALUES

const newUser = {
  isNew: true,
}

// newUser.username = 'fresh.prince'; // dot notataion
// newUser['password'] = 'abcd1234'; // bracket notation
// newUser[1] = 'abcd1234'; // bracket notation
// console.log(newUser);


// METHODS (FUNCTIONS AS VALUES)
const newObject = {
  username: 'Teresa',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}

// newObject.username = 'Aja';
// newObject.sayHello();

// ITERATE OVER AN OBJECT
const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
}

// FOR IN LOOP
for (let key in userTwo) {
  // console.log(key); // keys
  console.log(userTwo[key]); // values
  // console.log(userTwo.key); // values NOOOOOOOOO
}
*/

// ********* CALLBACK FUNCTIONS **********
/*
function saysHelloToUser(user) {
  return `Hello ${user}!`;
}

function saysGoodbyeToUser(user) {
  return `Goodbye ${user}!`;
}

// A FUNCTION THAT TAKES IN A FUNCTION AS AN ARGUMENT
function createGreeting(user, cb) {
  return cb(user);
}


// CONSOLE LOGGING THE RETURN STATEMENTS OF EACH CALLBACK
console.log(createGreeting('Dan', saysHelloToUser)); // 'Hello Dan!'
console.log(createGreeting('Dan', saysGoodbyeToUser)); // 'Goodbye Dan!'

// ********* EVENT LISTENERS **********

const mainBtn = document.querySelector('#main-btn');
console.log(mainBtn);

const container = document.querySelector('#second-btn');
console.log(mainBtn2);

const whatIsTheId = (event) => {
  console.log(`YOU CLICKED ${event.target.id}!`);

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON';
    document.querySelector('body').style.background = 'red';

  } else {
    container.innerHTML = 'You clicked the Second Button';
    document.querySelector('body').style.background = 'white';
  }
};

button.addEventListener('click', whatIsTheId);

// TARGET `other-btn` and on click, run whatIsTheId
const button2 = document.querySelector('#second-btn');

button2.addEventListener('click', whatIsTheId);
*/

// ********* PIES ***********

const pies = [
  {
    name: 'Dutch Apple Pie',
    ingredients: 'apples,sugar,butter,nutmeg,dutch people',
    bakeTemp: 5000,
    drinkPairing: 'Earl Grey Tea',
    imageUrl:
      'https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg',
    instructor: 'Doc',
    iceCream: 'Vanilla',
  },
  {
    name: 'Berry Pie',
    ingredients: 'berries',
    bakeTemp: 400,
    drinkPairing: 'wine',
    imageUrl:
      'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
    instructor: 'Doc',
    iceCream: 'banana',
  },
  {
    name: 'Pumpkin Pie',
    ingredients: 'pumpkins, nutmeg, cinnamon, graham crackers, pilgrims',
    bakeTemp: 42,
    drinkPairing: 'egg nog',
    imageUrl:
      'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
    instructor: 'Aja',
    iceCream: 'Vanilla',
  },
  {
    name: 'Shoo Fly Pie',
    ingredients: 'Molasses, nutmeg, cinnamon, butter, graham cracker ',
    bakeTemp: 1234,
    drinkPairing: 'Apple Cider',
    imageUrl:
      'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
    instructor: 'Aja',
    iceCream: 'Coffee',
  },
  {
    name: 'Pecan Pie',
    ingredients: 'Pecans, sugar, butter, flour',
    bakeTemp: 5000,
    drinkPairing: 'Milk',
    imageUrl:
      'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
    instructor: 'Trinity',
    iceCream: 'Vanilla',
  },
  {
    name: 'Keylime Pie',
    ingredients: 'lemons, sugar, butter, flour',
    bakeTemp: 5000,
    drinkPairing: 'Water',
    imageUrl:
      'https://www.browneyedbaker.com/wp-content/uploads/2012/05/key-lime-pie-2-1200.jpg',
    instructor: 'Trinity',
    iceCream: 'none',
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const pieBuilder = (taco) => {
  let domString = '';

  for (let i = 0; taco.length; i++) {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                    <div class="img-container" style="background-image: url('${taco[i].imageUrl}');"></div>
                    <div class="card-body">
                      <p class="card-text">${taco[i].name}</p>
                      <p class="card-text">${taco[i].ingredients}</p>
                      <p class="card-text">${taco[i].bakeTemp}</p>
                      <p class="card-text">${taco[i].drinkPairing}</p>
                      <p class="card-text">${taco[i].iceCream}</p>
                      <button type="button" class="btn btn-danger" id="${i}">Delete</button>
                    </div>
                  </div>`;
  }
  printToDom('pies', domString);
};

const handleButtonClick = (e) => {
  const buttonId = (e.target.id);
  // CHANGING BG COLOR BASED ON BUTTON CLICK
  if (buttonId === 'Trinity') {
    // Dark Mode
    document.querySelector('body').style.backgroundColor = '#000';
  } else if (buttonId === 'Doc') {
    // LIGHT MODE
    document.querySelector('body').style.backgroundColor = '#FFF';
  } else if (buttonId === 'Aja') {
    // MEDIUM MODE
    document.querySelector('body').style.backgroundColor = '#808080';
  } else if (buttonId == 'All') {
    // DEFAULT
    document.querySelector('body').style.backgroundColor = 'rgb(175, 196, 175)';
  } else {
    // DEFAULT
    document.querySelector('body').style.backgroundColor = 'white';
  }

  // UPDATE THE PIES BASED ON BUTTON CLICKED
  const selectedPies = [];

  // pies[0].instructor // 'Doc'
  for (let i = 0; i < pies.length; i++) {
    if (pies[i].instructor === buttonId) {
      selectedPies.push(pies[i]);
    }
  }
  if (buttonId === 'All') {
    pieBuilder(pies);
  } else {
    pieBuilder(selectedPies);
  }
}

const buttonEvents = () => {
  document.querySelector('#All').addEventListener('click', handleButtonClick);
  document.querySelector('#Doc').addEventListener('click', handleButtonClick);
  document.querySelector('#Aja').addEventListener('click', handleButtonClick);
  document.querySelector('#Trinity').addEventListener('click', handleButtonClick);
}

// const buttonEvents = () => {
//   const allBtn = document.querySelector('#All');
//   const doc = document.querySelector('#Doc');
//   const ajaBtn = document.querySelector('#Aja');
//   const trinityBtn = document.querySelector('#Trinity');
//   allBtn.addEventListener('click' handleButtonClick);
//   doc.addEventListener('click' handleButtonClick);
//   ajaBtn.addEventListener('click' handleButtonClick);
//   trinityBtn.addEventListener('click' handleButtonClick);
// }

const init = () => {
  buttonEvents();
  pieBuilder(pies);
};

init();
