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




// function convertStringToArray(text) {

//     var text2 = text.toLowerCase().split("");
//     return text2
// }


// var result = convertStringToArray("Ayaz");

// console.log(result);

// function convertSanToTime(num) {

//     var min = num/60;
//     var hour = num/3600;
//     return `hour: ${min} or min: ${hour}`
// }


// console.log(convertSanToTime(9250));



// var usarname = prompt('xais olunur adinizi qeyd edin:');

// var usarage = prompt('xais olunur yasinizi qeyd edin:');

// var usarjob = prompt('xais olunur calistiginiz vezifeni qeyd edin:');

// function showUserInfo(names1 = "usar", age="age1", job="job1"){
//     var result1 = `${names1}, sizin ${age} yasiniz var siz ${job} olaraq calisirsiniz`

//     if(names1==null){
//         names1=0

//     }if(age==null){
//         age=0

//     }if(job==null){
//         job=0
//     }
//     return result1
// }


// console.log(showUserInfo(usarname,usarage,usarjob));





// var nums = [2,3,4,5,6] //! [6,5,4,3,2]


// function reverseArray(arr){
//     var reverarray2 = [];
//     for(var i = arr.lenght - 1; i>=0, i--) {

//         reverarray2.push(arr[i]);

//     }

//     return reverarray2
// }


// var reversarray3 = reverseArray(nums) 
// console.log(reversarray3);



// var nums  = [21,43,101,2,10]


// function maxOrMinNumber(arr,method){

// for (var index = 1; index < arr.length; index++) {
//     if(method) {
//         if(arr[index]> arr[index+1]){
//             console.log(arr[index]);e    
            
//         }
//     }else{ 
//         if(arr[index]< arr[index+1]){
//             console.log(arr[index]);
//         } 
//     }
//     // if(arr[index]< arr[index+1]) {
//     //     console.log(arr[index]);
//     //     }else 
// }
    
// }

// // maxOrMinNumber(nums,false) 
// maxOrMinNumber(nums,true)

// var numbers = [12, 4, 17, 10, 12, 7, 29];


// function myfunc(numbers){
// var sum = 0;


// for(var i = 0; i < numbers.length; i++){
//     sum+=numbers[i]
// }
// return sum
// }
// myfunc(numbers);
// console.log(myfunc(numbers));

// var result = numbers.reduce(function(sum,el){
//     return sum + el;
//  },0)



for(var i = 0; i<20; i+=3){
    console.log("index", i);
}

