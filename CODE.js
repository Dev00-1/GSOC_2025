// alert in JS 
// alert("Warning Cannot proceed further")

// number =>2 to power 53
// string => ""
// bigint used when dealing with big numbers or stock market related things . 
// boolean => true/false 
// null => empty value . it is standalone value 
// undefined => value is not assigned till yet
// symbol => unique 


// object 

// *console.log(typeof "Dev");* // undefined
// *consolelog(typeof null);* // object
//  conversion and operation 


// console.log(typeof score);
// console.log(typeof (score));

//  let valueInNumber = Number(score);
//  *console.log(typeof valueInNumber);
//  console.log(valueInNumber); *

//  "33" => 33
// "33abc" => Nan
// true => 1; false => 0

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Dev" => true
// let stringNumber = String(stringNumber)
// console.log(stringNumber);

// let num1, num2, num3

// num1 = num2 = num3= 2 +2

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
// comparison and equality check is treated differently in JS

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// // ===
// console.log("2" === 2);
// Data type summary 
//  # PRIMITIVE 
// 7 Types : String, Number, Boolearn, Null, Undefined, Symbol, BigInt


// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3468220268338844n


// REFERENCE (NON-PRIMITIVE)

// Array, Objects, Function
// const heros = ["shaktiman", "nagraj", "doga"]
// let myObj = {
//     name: "DEV",
//     age: 20,

// }

// const myFunction = function(){
//     console.log("Hello World")
// }

// Memory in JS
// Stack (PRIMITIVE), Heap(NON-PRIMITIVE)

// 

// const name = "Dev"
// const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('DEVUC')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('C'));


// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   Dev   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const score = 400
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3));
// const hundreds = 1000000
// console.log(hundreds.toLocaleString('end-IN'));
// ++++++++++++++++++++ Maths +++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log(Math.random()*10 + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1))) 

// DATES

// let myDate = new Date()
// console.log(myDate.toLocaleTimeString('en-IN'));
// console.log(myDate.toLocaleString('en-In'));
// console.log(myDate.toString());

// let myCreatedDate = new Date("04-11-2025")

// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// Arrays
// const myArr = [0, 1, 2, 3, 4, 5]

// const myHeors = ["shaktiman", "nagraj", "doga"]

// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

// Array Methods 
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
 
// slice, splice

// console.log("A  ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);
// study splice and slice again in detail 

// arrays part 2
// const  marval_heroes = ["ironman", "spiderman", "thor", ]
// const dc_heroes = ["batman", "superman", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marval_heroes);

// marval_heroes.concat(dc_heroes)
// console.log(marval-heroes);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Dev"))
// console.log(Array.from("Dev"))
// console.log(Array.from({names: "Dev"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

// objects in js 
// singleton 
// object literal 
// object constuctor ( always singleton ) 
// 235


// tinderUser = new Object()
//  tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.Name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//      email : "devdec@gmail.com",
//      fullname : {
//         userFullname : {
//             firstname : "Dev",
//             lastname : "Malang"
//         }
//      }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// const Obj1 = {1: "a", 2: "b"}
// const Obj2 = {3: "a", 4: "b"}
// const Obj4 = {5: "a", 6: "b"}

// const Obj3 = { Obj1, Obj2 }
// const Obj3 = Object.assign({}, Obj1, Obj2, Obj4)


// const Obj3 = {...Obj1, ...Obj2}
// console.log(Obj3);



// const users = [
//     {
//      id: 1, 
//      email: "dev@gmail.com"
//     },
//     {
//      id: 1, 
//      email: "dev@gmail.com"
//     },
// ] 

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object(tinderUser.length));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('IsLoggedIn'));

// object part 3 
// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh",

// }

// course.courseInstructor = "hitesh"

// const {courseInstructor: instructor} = course

// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "Free",
// }

// JSON
// [
//     {},
//     {},
//     {},
// ]


// function in js 
function sayMyName () {
      console.log("D");
      console.log("E");
      console.log("V");
} 

// / sayMyName()

function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     return result 
    return number1 + number2
}
const result = addTwoNumbers(3, 5)

// console.log("Result : ", result);

function loginUserMessage(username) {
    if(username ===undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Dev"))

function calculateCartPrice(...num1) {
    return num1

}

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username : "Dev",
    price : 199,
}

function handleObject(anyobject) {
    // console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username : "Dev",
    price : 399, 
    coursename : "english spoken"
})

// passing arrays in js 

const myNewArray = [200, 400, 600, 1200]

function returnSecondValue(getArray) {
      return getArray[1]


}
    
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 600, 1200]));
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER : ", a);

}


// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Dev"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Dev"
    if(username === "Dev") {
       const website = " youtube"
    //    console.log(username + website)
    }
//     console.log(website);
 }

// console.log(username);

//  ++++++++++++++++++interesting +++++++++++++++++++
function addone(num) {
    return num + 1

}


addone(5)

const addTwo = function(num) {
    return num + 2
}

addTwo(5)
























