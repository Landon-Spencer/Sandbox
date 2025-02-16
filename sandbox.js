// console.log(true || false && true); //true
// console.log((12 > 6) + 1); //2
// console.log(11 && 0); //0

// let age = 21;

// //Ternary Expressions
// let drink = age >= 21 ? '<h1>The user can drink<h1>' : '<h1>The user cannot drink<h1>';
// console.log(drink);
// document.write(age >= 21 ? '<h1>The user can drink<h1>' : '<h1>The user cannot drink<h1>');

// //Do While
// let number1 = 10;
// let number2 = 10;

// do {
//   console.log("No other loop would execute this");
// } while (number1 < number2);

// //Switch Statements
// const expr = 'Spring';

// switch (expr) {
//   case 'Summer':
//     console.log(`The season is ${expr}`);
//     break;
//   case 'Fall':
//   	console.log(`The season is ${expr}`);
//     break;
//   case 'Winter':
//     console.log(`The season is ${expr}`);
//     break;
//   case 'Spring':
//     console.log(`The season is ${expr}`);
//     break;
//   default:
//     console.log(`Sorry, ${expr} is not a season.`);
// }

// //Objects
// var superman = {
//   alias: "Superman",
//   name: "Clark Kent",
//   'location': "Smallville",
//   'age in years': 50
// }

// let currentKey = 'alias';

// console.log(superman[currentKey]);

// currentKey = 'location';

// console.log(superman[currentKey]);

// currentKey = 'age in years';

// console.log(superman[currentKey]);

// //For in loop for keys
// let dog = {name: "Chance", breed: "German Shepherd", weight: 100};

// for (var key in dog){
//   console.log(key)
// }

// //For in loop for values
// let dog = {name: "Chance", breed: "German Shepherd", weight: 100};


// for (var key in dog){
//   console.log(dog[key])
// }

// //in operator
// let dog = {name: "Chance", breed: "German shepherd", weight: 100};

// if('age' in dog) console.log("The dog has an age");
// else console.log("The dog has NO age");

// let key = "breed";

// if(key in dog) console.log(`The dog has a ${key}`);
// else console.log(`The dog has NO ${key}`);

// //.dot notation access
// let secondWorstObjectEver = {
//   fish: 'gold',
//   'i love spaces': 17,
//   underscores_are_better: 'probably true',
//   5876: 'numbersnumbersnumbers',
//   'exactly': {},
// };

// console.log(secondWorstObjectEver.fish);
// // console.log(secondWorstObjectEver.'i love spaces');
// console.log(secondWorstObjectEver.underscores_are_better);
// // console.log(secondWorstObjectEver.5876);
// console.log(secondWorstObjectEver.exactly);

// //For...of loop
// var worldAuthors = ['Edgar Allan Poe', 'Fyodor Dostoevsky', 'J.R.R Tolkien', 'Homer', 'Victor Hugo'];

// for(let element of worldAuthors){
//   console.log(element);
// }

// //For...of loop with array.entries
// let array = ["dog", "cat", "fish"];

// for(let [index, animal] of array.entries()){
// 	console.log(index, animal)
// }

// //For...Of loop exercise
// const myFunction = (number) => {
//   const functionArray = [
//     (num) => (num += 1),
//     // add function here...
//     (num) => (num *= 2),
//     (num) => (num *= 534),
//     (num) => (num /= 3),
//     (num) => (Math.round(num))
//   ];

//   for (const func of functionArray) {
//     // complete functionality...
//     console.log(func(number));
//     number = func(number);
//   }
//   return number;
// }

// console.log(myFunction(2.8));

// //concat
// let cities = ["Ottawa", "Tokyo"];
// let moreCities = ["Kathmandu", "Bangkok"];

// cities.concat(moreCities);

// console.log(cities); //what is the output?
// let combinedCities = cities.concat(moreCities);

// console.log(combinedCities); //what is the output?
// let evenMoreCities = ["Samarkand", "Sofia"];

// combinedCities = moreCities.concat(cities, evenMoreCities);

// console.log(combinedCities); //what is the output?
// combinedCities = evenMoreCities.concat("Belgrade");

// console.log(combinedCities); //what is the output?

// //nested arrays
// const apartments = [ ["001", "002", "003", "004", "005"], ["101", "102", "103", "104", "105"], ["201", "202", "203", '204', "205"], ["301", "302", "303", "304", "305"] ];

// for(let index = 0; index < apartments.length; index++){
//   console.log(apartments[index]);
// }

// for(let floorIndex = 0; floorIndex < apartments.length; floorIndex++){
//   for(let aptIndex = 0; aptIndex < apartments[floorIndex].length; aptIndex++){
//       apartments[floorIndex][aptIndex] = "A" + apartments[floorIndex][aptIndex];
//   }
// }

// console.log(apartments);

// //object access
// let dailyWeather = {
//   conditions: 'Cloudy',
//   temperature: 48,
//   temperatureUnit: 'F',
//   humidity: '22%',
//   wind: {
//     speed: 20,
//     speedUnit: 'mph',
//     direction: 'NW',
//   },
//   getSummary: function() {
//     return 'Conditions: ' + this.conditions + ' ' + 'Temperature: ' + this.temperature + this.temperatureUnit;
//   }
// }

// // console.log(dailyWeather.speed);
// // console.log(wind.speed);
// console.log(dailyWeather.wind.speed);
// console.log(dailyWeather["wind"]["speed"]);
// console.log(dailyWeather["wind"].speed);
// // console.log(dailyWeather[wind].speed);

// console.log(dailyWeather.getSummary());

// let housePrices = {};
// housePrices.threeBedroom = "699000";
// console.log(housePrices);

// var test1 = (a,b,c) => a + b * c;
// console.log(test1(1,2,3))
// // expect(_.mathOrder(test1(1,2,3))).to.eql(7);

// var test2 = (a,b,c) => a * b + c;
// console.log(test2(1,2,3))
// // expect(_.mathOrder(test2(1,2,3))).to.eql(5);

// var test3 = (a,b,c) => a / c * b + c;
// console.log(test3(6,8,2))
// // expect(_.mathOrder(test3(6,8,2))).to.eql(26);

// var test4 = (a,b,c) => a + c + b + b * a / b - c / b;
// console.log(test4(10,2,6))
// // expect(_.mathOrder(test4(10,2,6))).to.eql(25);

// let string = ['Coding ', 'is ', 'the ', 'best!'];

// function forLoop(a){
//   //Code Goes Below
//   let result = '';
//   for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
//     result = result.concat(a[i]);
//     console.log(result);
//   }
//   return result;
// }

// console.log(forLoop(string));

// //chaining hoa
// const students = [
//   { name: "Stephen", age: 24 },
//   { name: "Alice", age: 19 },
//   { name: "Jordan", age: 29 },
//   { name: "Julie", age: 21 },
//   { name: "Chris", age: 26 }
// ]

// // let age = students.map((student) => {return student.age});
// // console.log(age);

// let averageAge = students.map((student) => {return student.age}).reduce((sum, age) => {return sum + age}, 0) / students.length;
// console.log(averageAge);

// let contact = {
// 	name: "Santa Claus",
// 	address: "123 ELF ROAD, NORTH POLE 88888",
// 	phone: "78658909",
// 	email: "santa@north-pole.com"
// };

// const stringifyContact = (parameter) => {
// 	let {name, address, phone, email} = parameter;
// 	return `${name}, ${address}, ${phone}, ${email}`;
// }

// stringifyContact(contact);

// //recusion
// const testCase = 'hello, world';

// const reverseStr = (str) => {
//   console.log('string ', str);
//   if (str.length === 1) {
//     return str;
//   }
//   return (str.slice(str.length - 1) + reverseStr(str.slice(0, str.length - 1)));
// }

// console.log(reverseStr(testCase));

// //Recusion not complete
// const countUp = (count) => {
//   let result = [];
//   console.log(count);
//   if (count === 0){
//     // result.push(count);
//     return result;
//   }
//   console.log(result);
//   result.push(countUp(count - 1));
//   return result;
// }

// console.log(countUp(5));

// //promise
// const promise = () => {

//   new Promise( (resolve, reject) => {
//   	const x = Math.random();
//   	return x < 0.5 ? resolve("Resolved") : reject([x, 1]);
// 	})
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       const y = Math.random();
//       return y < 0.5 ? resolve() : reject([y, 2]);
//     });
//   })
//   .then(() => console.log("Both promises successfully resolved!"))
//   .catch(val => console.log(`Promise #${val[1]} rejected: value was ${val[0]}`));

// }

// promise();

// new Promise((resolve, reject) => {
//   console.log("Initial");
//   resolve();
// })
//   .then(() => {
//     throw new Error("Something failed");
//     console.log("Do this");
//   })
//   .catch(() => {
//     console.error("Do that");
//   })
//   .then(() => {
//     console.log("Do this, no matter what happened before");
//   });

// const askFortune = question => {
//   return new Promise((resolve, reject) => {
//     console.log(question);

//     if(!question){
//       throw new Error("You must ask a question!");
//     }
//     //Generate a random number that rounds to 1 or 0
//     const random = Math.round(Math.random());
//     return resolve(random ? 'Yes!' : 'No')
//   })
//   .then( result => {
//       console.log(`In the result: ${result}`);
//       return result;
//   })
//   .catch( error => {
//       console.log(`In the error: ${error}`);
//       return error.message
//   })

// }

//   // In another file, somewhere else with access to `askFortune()`

//   askFortune(`Will it be sunny today?`)
//     .then( response => console.log(response))
//     .catch( error => console.error("Error!", error))

//fetch response
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => console.log(response))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(rawResponse => rawResponse.json())
// .then(jsonifiedResponse => console.log(jsonifiedResponse))

// fetch('https://jsonplaceholder.typicode.com/todo/1')
// .then(rawResponse => {
//   console.log(rawResponse);
//   return rawResponse.json();
// })
// .then(jsonifiedResponse => console.log("Jsonified data: ", jsonifiedResponse))
// .catch(error => console.log(error))

// //change the path to see error
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(rawResponse => {
//   if(!rawResponse.ok){
//     throw new Error(`code: ${rawResponse.status}, status text: ${rawResponse.statusText}`)
//   }
//   return rawResponse.json()
// })
// .then(jsonifiedResponse => console.log("Jsonified data: ", jsonifiedResponse))
// .catch( error => console.log(error))

// //POST request
// let newPost = {
//   userId: 1,
//   title: "My post",
//   body: "This is my first post"
// };

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(newPost)
// })
//   .then((rawResponse) => {
//     if (!rawResponse.ok) {
//       throw new Error(
//         `code: ${rawResponse.status}, status text: ${rawResponse.statusText}`
//       );
//     }
//     return rawResponse.json();
//   })
//   .then((jsonifiedResponse) =>
//     console.log("Jsonified data: ", jsonifiedResponse)
//   )
//   .catch((error) => console.log(error));

// //PUT request example
// fetch('some URL', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(updatedRecord)
// })
// .then(rawResponse => {
//   if(!rawResponse.ok){
//     throw new Error(`code: ${rawResponse.status}, status text: ${rawResponse.statusText}`)
//   } else rawResponse.json()
// })
// .then(jsonifiedResponse => console.log("Jsonified data: ", jsonifiedResponse))
// .catch( error => console.log(error))

// //DELETE
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// });

//Storage
// var animals = {'african':['lion','elephant'], 'asian': ['tiger', 'elephant']};
// sessionStorage.setItem('animals', JSON.stringify(animals));
// var animalsObj = JSON.parse(sessionStorage.getItem('animals'));

// //Classes
// class Car {
//   constructor(make, model, horsepower, value) {
//     this.make = make;
//     this.model = model;
//     this.horsepower = horsepower;
//     this.value = value;
//   };
//   depreciate() {
//     this.value *= 0.75;
//     return this.value;
//   };
//   listSpecs() {
//     return `The ${this.make} ${this.model} generates ${this.horsepower} BHP and costs $${this.value}.`
//   };
// };

// class SportsCar extends Car{
//   constructor(make, model, horsepower, value, acceleration){
//     super(make, model, horsepower, value);
//     this.acceleration = acceleration;
//   }
//   listSpecs(){
//     return `The ${this.make} ${this.model} generates ${this.horsepower} BHP, accelerates from 0-60 MPH in ${this.acceleration} seconds, and costs $${this.value}.`;
//   }
// };

// const car1 = new Car('Porsche', 'GT2 RS', 2011, 690, 2.6);

// const car2 = new SportsCar('Porsche', 'GT2 RS', 2013, 690, 2.3);

// console.log(car1.listSpecs());

// console.log(car2.listSpecs());

// //this
// var fun = () => {
//   log(this)
// }

// log(this); //GLOBAL REFERENCE => `this` is bound to the global object (which is `windows` in a browser)

// fun(); // FREE FUNCTION INVOCATION => `this` is bound to the global object (which is `windows` in a browser)

// fun.call(obj); // .call or .apply() INVOCATION => `this` is bound to the first argument to .call() or .apply()

// fun.apply(obj); // .call or .apply() INVOCATION => `this` is bound to the first argument to .call() or .apply()

// new fun() // CONSTRUCTION MODE => `this` is bound to a new object created for that invocation

// //make a fun method
// var obj = { method: fun };

// obj.method() // METHOD INVOCATION => `this` is bound to the object on the left of the CALL TIME dot

// const employee = {
//   name: 'Bob',
//   salary: 60000,
//   raiseSalary (amount){
//     this.salary += amount
//   }
//   // raiseSalary: (amount) => this.salary + amount
// }

// console.log(employee);
// employee.raiseSalary(500);
// console.log(employee);

// const coordinates = {
//   x: 2,
//   y: 5,
//   getPosition() {
//     return (this.x, this.y)
//   }
// }

// const retrievePosition = coordinates.getPosition();
// console.log(coordinates);
// console.log(retrievePosition);

// class Classroom {
//   constructor(count) {
//       this.count = count;
//   };
//   addStudents(num) {
//       this.count += num;
//   };
// };
// const classOne = new Classroom(20);
// const classOneCopy = classOne;
// classOneCopy.addStudents(10);
// classOne.addStudents(5);
// classOne.addStudents(10);
// classOneCopy.addStudents(10);

// console.log(classOne.count)

console.log('my Mac Mini is working');