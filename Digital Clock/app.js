const clock = document.getElementById('clock')
setInterval(() => {
    const time = new Date();
    clock.innerHTML = time.toLocaleString()
}, 1000);


// console.log(buttons);

function abc (e){
    const buttons  = document.querySelector('#span');
    const body  = document.querySelector('body');
    buttons.addEventListener('click', (a) =>{
    if(a.target.id === 'span')
    {body.style.backgroundColor = '#212121'}
    })
}
abc();
// buttons.forEach((e) => {
//   e.addEventListener('click' , (a) =>{
//   if (a.target.id === 'span') {
//     body.style.backgroundColor = 'black'
//   }
//   })  
// });
// button.forEach((buttons) => {
//     buttons.addEventListener('click' , function (e){
//         if(e.target.id = 'clock'){
//             body.style.backgroundColor= '#212121'
//         }
//     })
// });