// count = 1;
// for(i=1;i<8;i++){
//     setTimeout(() => {
//         console.log(count)
//         count++;
//     },i*1000);
// }

// function Prime(num){
//     return new Promise((resolve, reject) => {
//         let count = 0;
//         for(i=0;i<num/2 ; i++){
//             if(num%i === 0){
//                 count++;
//             }
//         }
//         if(count === 1){
//             resolve("Promise Resolved");
//         }
//         else{
//             reject("Promise Rejected");
//         }
//     })
// }
// Prime(7)
// .then((data) => console.log(data))
// .catch((err) => console.log(err))



// let number =(time,num)=>{
//     return new Promise((resolve,rejected)=>{
//         if(num){
//             setTimeout(()=>{
//                 resolve(num());
//             },time)
//         }
//         else{
//             rejected(console.log("not a number"));
//         }
//     })
//    }
//    number(0,()=>console.log("number is"))
//    .then(()=>{
//     return number(1000,()=>console.log("1"))
//    })  
//    .then(()=>{
//     return number(2000,()=>console.log("2"))
//    })  
//    .then(()=>{
//     return number(3000,()=>console.log("3"))
//    })  
//    .then(()=>{
//     return number(4000,()=>console.log("4"))
//    })  
//    .then(()=>{
//     return number(5000,()=>console.log("5"))
//    })  
//    .then(()=>{
//     return number(1000,()=>console.log("1"))
//    })  
//    .then(()=>{
//     return number(6000,()=>console.log("6"))
//    })  
//    .then(()=>{
//     return number(7000,()=>console.log("7"))
//    })  


// function abhi(){
//     console.log("hello");
// }

// function abhi(name, callback) {
//     console.log('hiii' + ' ' + name);
//     callback();
// }

// function callMe() {
//     console.log('hello');
// }

// abhi('abhi', callMe);
// setTimeout(() => {
//     console.log("Hello");
//     setTimeout(() => {
//         console.log("Hey");
//         setTimeout(() => {
//             console.log("Namaste");
//             setTimeout(() => {
//                 console.log("Hi");
//                 setTimeout(() => {
//                     console.log("EveryOne");
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);


// const promise() = new Promise((resolve,reject)=>{
//     let x=45;
//     if(x%5 === 0){
//         resolve("True");
//     }
//     else{
//         reject("false")
//     }
// })

// promise()
// .then((result) => {
//     console.log("true");
// }).catch((err) => {
//     console.log("false");
// });


// let promise = new Promise((resolve, reject) => {
//    let 
// })

const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);})
