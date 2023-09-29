console.log("Jack Ma maslaxatlari");
const list = [
    "yaxshi talaba boling", // 0-20
    "togri boshliq tanlang va koproq xato qiling", //20-30
    "uzingizga ishlashni boshlang", //30-40
    "siz kuchli bolgan narsani qiling", //40-50
    "yoshlarga inv qiling", //50-60
    "shularni qimagan bolsangiz damizni oling", //60
];



//Callback function
function maslaxatBering(a, callback) { 
        if (typeof a !=='number') callback ("insert a number", null);
        else if(a <= 20) callback (null, list[0]); 
        else if(a >20 && a <=30) callback (null, list[1]);
        else if(a >30 && a <=40) callback (null, list[2]);
        else if(a >30 && a <=40) callback (null, list[3]);
        else if(a >50 && a <=60) callback (null, list[4]);
        else{
            setInterval(function () {
                callback(null, list[5]);
            }, 1000);
    }
}

console.log('passed here 0');
maslaxatBering (70,(err, data) => {
    if (err) console.log("ERROR:", err);
    else{
        console.log(data);
    }
});
console.log("passed here 1");







//ASYNC function
// async function maslaxatBering(a) { //callback
//     if(typeof a !=='number') throw new Error ("insert a number"); //callback null
//     else if(a <= 20) return list[0];  //callback(null, )
//     else if(a >20 && a <=30) return list[1]; //callback(null, list[1]);
//     else if(a >30 && a <=40) return list[2]; //callback(null, list[2]);
//     else if(a >40 && a <=50) return list[3]; //callback(null, list[3]);
//     else if(a >50 && a <=60) return list[4]; //callback(null, list[4]);
//     else{

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {//setInterval(() => {//setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//             // resolve(list[5]);
//         });
//         //return list[5];
//         // setTimeout(function(){
//         //     return list[5];//callback(null, list[5]);
//         // }, 5000);
//         //callback(null, list[5]);
//     }
// }

// call via then /catch


/*console.log('passed here 1');
maslaxatBering(40).then(data => {
    console.log('javob', data);
}).catch(err =>{
    console.log('ERROR', err);
})
console.log('passed here 1');
*/

// maslaxatBering(25).then(data => {
//     maslaxatBering(30).then(data => {
//         maslaxatBering(40).then(data => {
//             console.log('javob', data);
//         }).catch(err =>{
//             console.log('ERROR', err);
//         })
//         console.log('passed here 1');
//         console.log('javob', data);
//     }).catch(err =>{
//         console.log('ERROR', err);
//     })
//     console.log('passed here 1');
//     console.log('javob', data);
// }).catch(err =>{
//     console.log('ERROR', err);
// })
// console.log('passed here 0');  //(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else{
//         console.log('javob:', data);
//     }
//     //console.log('javob:', data);
// });
// console.log('passed here 1');


//call via async/await
// async function run(){
//     let javob = await maslaxatBering(25); //20 //65 //25
//     console.log(javob);
//     javob = await maslaxatBering(70);  //31
//     console.log(javob);
//     javob = await maslaxatBering(41);
//     console.log(javob);
// }
// run();