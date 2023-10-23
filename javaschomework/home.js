// var names = ["TitaniC", "iconiC", "apple", "ironic", "mango"];


// for(var i = 0; i<names.length; i=i+1){

//     var nameend = names[i];

//     var littlename = nameend.toLowerCase();

//     var result = littlename.startsWith("i");

//     if(result==true){

//     console.log(littlename);
//     }






// }


// toLowerCase()
// endWith()
// for loop




// var list = [90, 80, 70, 60, 50, 40, 30];



// for(var num of list){
//     console.log(`the num +list ${num}`)
// }

// for(var num2 in list){
//     console.log(`the num2 + list ${num2}`)
// }







// var i =20;

// while(i>0){
//     console.log(i);
//     i--
// }






// var list = [90, 80, 70, 60, 50, 40, 30];


// var mystring = list.join("");
// console.log(mystring);

// var myarray = mystring.split("");

// console.log(myarray);
// +
// mystring2 = myarray.join("-");

// console.log(mystring2);


// var mystring2 = 





// var nums = [12, 32, 54, 65];
// var arr2 = [];

// for(var elements of nums){

//     elements2 = elements * 2
//     arr2.push(elements2)

// }

// console.log(arr2);


// var list = [
//     "John",
//     2000,
//     32,
//     true,
//     "Marry",
//     1200,
//     24,
//     false,
//     "Siri",
//     3000,
//     26,
//     false,
//   ]

//  for(i=0; i<list.length; i++){

//     if(typeof list[i] === "string"){
//         console.log(list[i]);
//     }
//  }

//  var i=0

//  while(i<list.length){

//     if(typeof list[i] === "string"){

//         console.log(list[i]);
//     }
//     i++
//  }





// var a = [5,6,8];

// var b = a.concat

// b[0]=7

// console.log(a);



// var a = [5,4];

// var b = [45,3];

// var c =a.concat(8,13);

// a[0]=101;

// console.log(c);



// inversion method

// var a = [5,4,7,6,3];

// a.reverse();

// console.log(a);



// var arr = [5,8,14,55];

// var result = arr.indexOf(56);
// console.log(result);



var fullname = prompt("adinizi qeyd edin");

var result1 = fullname.startsWith("a");

var result2 = fullname.endsWith("a")

if(result1 == true && result2 == true){
    console.log("girdiniz");

}else{
    console.log("olmadi");
}

console.log(result1);
