// obyekti map metodu ile obyektin key ve valuesini sileme ve yenisini elave etmek

// var personelMap = new Map();


// personelMap.set('ad', 'John');
// personelMap.set('soyad', 'Doe');
// personelMap.set('yas', '30');
         
// personelMap.delete('soyad')

// console.log(personelMap);

// const myobj = {

//     speed:0,
//     marka:"",

//     start: function(){

//     },

//     monitor: function(){
//         console.log("Show");
//     },
// };

// const myobj2 = {...myobj};

// myobj2.speed = 100;

// console.log("myobj", myobj);
// console.log("myobj2", myobj2);
  



// const myObj = {
//   fullname: "John",
//   age: 23,
//   married: true,
//   job:"Developer"
// };

// const arry1 = Object.keys(myObj);
// const arry2 = Object.values(myObj);

// console.log(arry1);
// console.log(arry2);



// 2. Task
// Verilen Obj istifade ederek bele cumle yaradin
// output:" You need fullname, age, married, job"


// const myObj = {
//     fullname: "John",
//     age: 23,
//     married: true,
//     job:"Developer"
//   };


//   let arry1 = ` You need ${Object.keys(myObj)}`;
//   let arryel =Object.keys(myObj)

//   for(Element of arryel){
//  let arryel1 = `You need ${Element}`
//  console.log(arryel1);
//   };


  

//  console.log(Object.keys(myObj));




// const element1 = document.querySelector("#datael");



// const obj1 = {
//     fullname: "John Doe",
//     age: 22,
  
//     monitor() {
//       console.log("this is", this.fullname + " " + this.age);
//     },
//   };
  
//   const obj2 = {
//     fullname: "Marry Perry",
//     age: 28,
//   };

//   obj1.monitor.call(obj2);


//   function monitor() {
//     console.log("this is", this.fullname + " " + this.age);
//   }


//   monitor.call(obj2);
//   monitor.apply(obj1);



// const obj1 = {
//     fullname: "John Doe",
//     age: 22,
//   };
  
//   const obj2 = {
//     fullname: "Marry Perry",
//     age: 28,
//   };
  
//   function monitor() {
//     console.log("this is", this.fullname + " " + this.age);
//   }



// const obj1 = {
//     fullname: "John Doe",
//     age: 22,
  
//     monitor(num) {
//       console.log("this is", this.fullname + " " + this.age+ " "+ num);
//     },
//   };

  
//   const obj2 = {
//     fullname: "Marry Perry",
//     age: 28,
//   };


//   obj1.monitor.call(obj2, 2);


// class emploinfo {


//     constructor(name, email, age){

//         this.name = name;
//         this.email = email;
//         this.age = age;

//     };

//     name1(){
//         console.log(this.name);
//     };
    
//     email2(){
//         console.log(this.email);
//     };
//     f
//     age2(){
//         console.log(this.age);
//     };
// };


// let obj1 = new emploinfo('Akif','Akif@gmail.com', 20)

// obj1.name1();
// obj1.email2();
// obj1.age2();s

// function calculateCashback(){
// const inp = parseFloat(document.getElementById('purchaseAmount').value);
// const cashbackRate = 0.05;

// let cashbackAmount = inp + cashbackRate;

// const obj1 {
//     fullname: "john",
//     age: 22,
// };



// class job {

//     constructor(developer, senior, language){

//         this.developer = developer;
//         this.senior = senior;
//         this.language = language;
//     }

//     developerinfo(){
//         if(this.developer === 0 && this.name()){
//             return "developer loading..."

//         }
//         return "run"
//     }

//     name(){
//         if(this.senior >0){
//             return true
//         }
//     }

// };


// const result = new job("john", "two", "java");
// const result2 = new job("marry", "one", "ruby");

// console.log(result.developerinfo());

// console.log(result2.developerinfo());











// class car extends job {
//     constructor(developer, senior, bmw){

//         super(developer);
//         super(senior);
//         this.bmw = bmw;


//     }


//     info(){
//         console.log(`this is ${this.developer}`);
//     }
// };

// const fun = new car("john", "two", "turbo");

// fun.developerinfo();




// 3. Task  |
// Abstarct numunesi ile Bir Parent class yaradin. 
// Bu classdan miras goturen 2 Child class yaradin.
// Child classlari daxilinde constructor yazmaga ehtiyac olmadan eyni deyerleri oturerek bu Child classlardan istifade ederek ayri ayri obj yaradin.
// Bu Childlarin ise ozlerine mexsus ayri ayri methodlari olsun



// class gamedev {
//     position = null;
//     age = 0;

//     constructor(name){
//         this.name = name;

//     }

//     devinfo(){
//         console.log(`this is, ${this.name}`);
//     }

// };


// class aws extends gamedev{

//     constructor(name, engine){
//         super(name);
//         this.engine = engine;

//     }

//     awsinfo(){
//         return`The engine this works on ${this.engine}`;
//     }

// };


// class iosdev extends gamedev {

//     position = null

//     constructor(name, engine, swift){
//         super(name);
//         this.position = engine ? true : false

//     }
    
//     devinfo2(){
//         return"will continue with swift";
//     }

// }

// const awsdev = new aws("luck", "unrealengine");
// const iosdeveloper = new iosdev("sam", "unity", "project")
// console.log(awsdev.name);
// console.log(awsdev.awsinfo());
// console.log(iosdeveloper.position);
// console.log(iosdeveloper.devinfo2());


// function countdown(n){
// if(n<1){
//  return false;
// }else{
// console.log(n);
// countdown(n-1)
// };
// }

// countdown(7);

// const questions = [
//     {
//     title:"questions 1",
//     trueansver:"answer1",
//     variants:["answer1", "answer2", "answer3"],
//   },
//   {
//     title:"questions 2",
//     trueansver:"answer1",
//     variants:["answer1", "answer2", "answer3"],
//   },
//   {
//     title:"questions 3",
//     trueansver:"answer1",
//     variants:["answer1", "answer2", "answer3"],
//   },
//   {
//     title:"questions 4",
//     trueansver:"answer1",
//     variants:["answer1", "answer2", "answer3"],
//   },
//   {
//     title:"questions 5",
//     trueansver:"answer1",
//     variants:["answer1", "answer2", "answer3"],
//   },
//   {
//     title:"questions 6",
//     trueansver:"answer1",
//     variants:["answer1", "answer2", "answer3"],
//   },
//   {
//     title:"questions 7",
//     trueansver:"answer1",
//     variants:["answer1", "answer2", "answer3"],
//   },
// ];

// "use strict";

// const myob = {
//     job: "dev",
//     car: "bmw",
//     name: "jone",

// }

// let {job: newjob} = myob;


// console.log(myob);



// function b(num1){

//     let result = num1 +5;
//     return result;
// }




// function c(num2, callback){

//     let result2 = callback(10) * num2;

//     return result2;
    
// }


// c(5, b);

// console.log(c(5,b));


// let myob1 = {

//     car: "bmw",
//     name: "carl",
//     movie: "interstaller",
// }


// let {car, name, movie,} = myob1;

// let {car, name, movie: game, series = "lucifer"} = myob1;

// console.log(game, series);


"use strict";

// const bankaccount = {
//  monitor:function(callback){
//     callback(500)
//  },
// };

// function isgoren(vereceyideyer) {
//     console.log("vereceyideyer", vereceyideyer);
// };
// bankaccount.monitor(isgoren);

// const show = (str) => {
//     console.log("str", str);
// };

// const resultver = (num, callback)=>{

// const netice = num * 2

// const sentence = `result: ${netice}`

// callback(sentence);
// }

// resultver(100, show)



// ? hoisting 

// var a = 1;

// console.log(a);



// let a = 10;
// let d = 200;


// function b(){
//    return a + 20;
// }

// function c () {
//    return d + 50;
// };



// console.log(b());
// console.log(c());

// function saygac (){

//    let num1 = 2;

//    function iceridehesablayan(part=0){
//       num1 = num1 + part

//       return num1;

//    };

//    return iceridehesablayan
// };




// const home = saygac();

// console.log(home(5));
// console.log(home(6));
// console.log(home(4));
// console.log(home());
// console.log(home());
// console.log(home());
// console.log(home());


let questions = [
   {

   title: "questions1",
   trueanswer: "answer2",
   answer: ["answer1, answer2, answer3 answer4"],
},
{

   title: "questions2",
   trueanswer: "answer1",
   answer: ["answer1, answer2, answer3 answer4"],
},
{

   title: "questions3",
   trueanswer: "answer4",
   answer: ["answer1, answer2, answer3 answer4"],
},
{

   title: "questions4",
   trueanswer: "answer4",
   answer: ["answer1, answer2, answer3 answer4"],
},
{

   title: "questions5",
   trueanswer: "answer3",
   answer: ["answer1, answer2, answer3 answer4"],
},
{

   title: "questions6",
   trueanswer: "answer1",
   answer: ["answer1, answer2, answer3 answer4"],
},
{

   title: "questions7",
   trueanswer: "answer2",
   answer: ["answer1, answer2, answer3 answer4"],
},
];

class questionsgame {
   point = 0;
   nextQindex = -1;
   qdata = [];
   constructor(data){
      this.qdata = data;
   }

   nextquestions(){

      if(this.nextQindex == this.qdata.length-1){
         console.log("game over!");
         return false;
      }else{
      this.nextQindex +=1
      const questionsitem = this.qdata[this.nextQindex];
      return questionsitem;
      }
   }
};


const qtitle = document.querySelector("#qtitle");
const btngroup = document.querySelector("#btngroup");

const qgame = new questionsgame(questions);

function gamestart (){
   const obj = qgame.nextquestions();
   qtitle.innerHTML = obj.title;
   btngroup.innerHTML = obj.answer.map(
      (item)=>
   `<button class="btn btn-outline-light" value="${item}">${item}</button>`)
   .join("");

   console.log(obj);
};

gamestart();
