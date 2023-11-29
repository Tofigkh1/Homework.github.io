// var names = ["TitaniC", "iconiC", "apple", "ironic", "mango"];


// for(var i = 0; i<names.length; i=i+1){

//     var nameend = names[i];

//     var littlename = nameend.toLowerCase();

//      var result = littlename.startsWith("i");

//      if(result==true){

//     console.log(littlename);

//  var result = numbers.reduce(function(sum,el){
//     return sum + el;
//  },0)

// var number = [12,4,17,10,1 2,7,29]


// var newarray = number.filter(function(item,index){

//      if (item !==12) {
//          return true 
//         }
//     return false



// });

// console.log("newarray:", newarray);

// Situation 1
//     ------------------------------------------

    
//     var myVar1 = 1;
//     function a1() {
//       myVar1 = 5 - 3;
//       b1();
//       alert("Q1 | a: " + myVar1);
//     }
//     function b1() {
//       alert("Q1 | b: " + myVar1);
//     }
//     a1();



//     var br = document.getElementById("btel");
//     console.log(br);


    

//     function resultnum2(nums) {
//         // Dizi içindeki minimum değeri bulma
//         var minNum4 = Math.min(...nums);
    
//         // Tüm dizi elemanlarını minimum değerle çarpma
//         var resultnum = nums.map(function(num) {
//             return num * minNum4;
//         });
    
//         // Sonucu döndürme
//         return resultnum;
//     };


//     var nums = [2, 9, 100, 67, 55, 32, 44, 12];theyi

//     var result = resultnum2(nums);

//     console.log("minumum deyer " + minNum4 );

//     console.log("minumum deyerin vurulmasi " + result);


    


// let maxnum2 = math.max(...nums)

// let 

// ohuuh 


// function resultnum2(nums) {
//     var minNum = Math.min(...nums);

//     var resultnum = nums.map(function(num) {
//         return num * minNum;
//     });

//     console.log("Orjinal Dizi: " + minNum);
//     console.log("Minimum Değerle Çarpılmış Dizi: " + resultnum);
// }

// var nums = [2, 9, 100, 67, 55, 32, 44, 12];
// resultnum2(nums);




// Task 3
// index.html h1 tagi yaradin
// index.js terefde ise idsi "title" olan h1 tagini tutun
// ona yeni class attr, icine yeni text yazin
// hemcinin ozunuz createElementler vasitesi ile span tagi yaradib sonra ise h1 taginin icine append edin


// let element = document.querySelector("title");

// element.classList.add("newclass1")

// element.textContent = "h1 tagi"

// console.log(element);

// let element = document.querySelector("title");

// element.classList.add("newclass1")

// element.textContent = "h1 tagi"

// let span1 = document.createElement("span");
// element.appendChild(span1);

// console.log(element);



// Task 5 Calc
// index.html terefde 2 input tagi yaradin ve heresine ayriligda id verin
// Hemcinin index.html terefde neticeni gosterilmesi ucun h1 tagi yaradin.
// inputlar hesablama olmasi ucun 2 reqemi ozunde saxlayir misal ucun (10 ve 5)
// H1 tagi ise sonra neticeni gostermek ucun istifade olunacaq (m. 15 reqemi ekranda gorunecek)
// index htmlde inputlari reqemle doldurandan sonra hansi emeliyyat secilmesi ucun 4 button yaradilmalidir.Bunlar toplama vurma cixma bolme olacaq.





// 8:55
// 6.Her duymeye id verin
// 8:55
// 7.Her duyme ucun click eventi yazilmalidir
    


// var btel = document.querySelector("#btelid");

// btel.setAttribute("class","btn btn-w-200");



// console.log(btel);



//  const el = document.querySelector("#btelid");



//  el.innerHTML = "<span> crate </span>"

//  el.style.color = "red"


// const persona1 = ["john", 33, true];

// const persona2 = ["Marry", 33, false];

// ? JSON - JS Object National

// const student = {
//     fullname: "Tofig",
//     Surname: "Ganiyev"
//     age: 33,
//     isMarried: true,
//     bornIn: 1985,
//     signInJobYears: [2003, 2004, 2006,],

// }

// console.log(student);


// const try1 = {
// age: 35,
// isMarried: true,
// bornIn: 1995,
// country: "USA",
// signInjobyears: [2000, 2007, 2010],
// currentCity: {
//     name: "Toronto",
//     country: "Canada",
// },

// actors4: [
//     {
//         name: "Test1",
//     },

//     {
//         name2: "Test2"
//     },
// ],
// };

// console.log(try1.actors4[1].name2);



// function A(){};

// var b = function(){};

// let a = (z,x) => {
//   return  z + x
// }

// a(2,3)

// let cons = a;

// console.log(cons);


// let b = (c, d) => c + d;

// b(3, 4);

// console.log(b(3, 4));




// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum);



// let Try1 = [3, 4, 7, 9];

// const Try2 = {
//     company: "Spotify",
//     profileFollowing: 344,
//     name: "Carl",
//     lastname: "jonson",
//     age: 24,
//     album: "Angel",
//     artist: "Zayn",


//     Page: function(a = 0) {

//         this.profileFollowing += 50;

//         console.log("page", this.profileFollowing);
//     },

//     pageunfollow:() => console.log("unfollow"),

// };

// Try2.Page();
// Try2.Page();
// Try2.Page();
// Try2.Page();

// Try2.pageunfollow();




// let expandingarray = ["ASUS", "HP", 55, 77, "LENOVA", 800];


// const try4 = {
//     Company: "MSI",
//     Model: 50678,
//     ModelGUI: "Command-Line Interface",
//     ReleaseYear: 1989,
//     btyeprocessingspeed: 1044,

//     monitor: function(){
//         console.log(`marka: ${this.Company}, Model ${this.Model}, ModelGUI: ${this.ModelGUI}, ReleaseYear: ${this.ReleaseYear}, btyeprocessingspeed: ${this.btyeprocessingspeed}`);
//     },

//     dataoperations: function(a = 0){
//         this.btyeprocessingspeed += 300;
//         console.log("dataoperations", this.btyeprocessingspeed);
//     },

//     btyeprocessings: function(){

//         if(this.btyeprocessingspeed >2044){
//             console.log(`Unfortunately,${this.btyeprocessingspeed} there is not enough space in your byte!`);
//         }else if(this.btyeprocessingspeed <2044){
//             console.log("There is enough space in your byte");

//         }
//     },


// };

// try4.monitor()
// try4.dataoperations();
// try4.btyeprocessings();
// try4.dataoperations();
// try4.btyeprocessings();
// try4.dataoperations();
// try4.btyeprocessings();
// try4.dataoperations();
// try4.btyeprocessings();
// try4.dataoperations();
// try4.btyeprocessings();



// const a = Date.now();

// const date = new Date();
// const monthindex = date.getMonth();

// const result = date.getDate();
// const result = date.getDay();
// const result = date.getFullYear();
// const result = date.getHours();
// const result = date.getMinutes();
// const result = date.getMonth();
// const result = date.getVarDate();
// let month= ["January","February","March","April","May","June","July",
//             "August","September","October","November","December"];
// let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];


// const countdaydown = (dateformat) =>{

// let crtm = new Date();

// let newtm = new Date(dateformat);


// const currentmil = crtm.getTime();

// const featuremil = newtm.getTime();

// const diffmil = Math.floor((featuremil - currentmil) / 1000 / 60 / 60 / 24);

// return diffmil;
// }

// console.log(countdaydown("2025-06-20"));



// document.querySelector("#datebtn").addEventListener("click", function(){
//     const value = document.querySelector("#dateinput").value
//     const result = countdaydown(value);
//     document.querySelector("#showdate").innerHTML = `bu tarixe ${result} gun qaldi`
// });

function my(){
const date = new Date();
let hourse = date.getHours();
let minutes = date.minutes;
if(hourse < 10){
    hourse = "0" + hourse;
}
return document.querySelector("#Timee").innerHTML =
hourse + ":" + date.getMinutes();
}
my();

// document.querySelector("#Timee").innerHTML =
// my(); + ":" + date.getMinutes();







