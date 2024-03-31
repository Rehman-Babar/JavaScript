const promis1 = new Promise( function (resolve, reject) {
setTimeout( function (){
    resolve();
// console.log('Asynic task complite');

} , 1000)
} );
promis1.then( function(){
    // console.log('promis consumed');
} )

new Promise( (resolve, reject)=>{
    setTimeout(() => {
        // console.log('Asynic task complite 2');
        resolve();
    }, 1000)
} ).then( () => {
    // console.log('promis consumed 2');
} )


const promis3 = new Promise( (resolve, reject) => {
    setTimeout( function(){
        resolve({name: 'rehman', email: 'rr9107295@gmail.com'});
    } ,1000)
} )
promis3.then( (e) => {
    // console.log(e);
} )


// const promis4 =new Promise( (resolve, reject) => {
//     setTimeout( function(){
//         let error = true
//         if (!error) {
//             resolve({name: 'rehman', password: 55263});
//         } else{
//             reject('Error: somethng went wrong')
//         }
//     }, 1000 )
// } )
// promis4.than( (e) => {
// console.log(e);
// return (e.name);
// } ).than((name) =>{
//     console.log(name);
// }).catch( function(error){
//     console.log(error);
// } ).finally( () => console.log('The promise is finally eather resolved or rejected') )


// const promis5 = new Promise( function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({langName: 'javaScript', password : 'raja1209g'})
//         } else{
//             reject('Error: javacript went wrong')
//         }
//     }, 1000)
// })
// async function consumepromis5 (){
//     try {
//         const response = await promis5
//     console.log(response);
//     } catch (error) {
//         console.log('Error');
//     }
// }
// consumepromis5();


fetch('https://randomuser.me/api/').then( function(response) {
    return response.json();
}).then((e) =>{
    console.log(e);
}).catch((error) =>{
    console.log(error);
})

