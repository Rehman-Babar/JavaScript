const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const tex = document.getElementById('text');
const tex2 = document.getElementById('text2');
const tex3 = document.getElementById('text3');

console.log(tex)
buttons.forEach( (button) => {
console.log(button);
button.addEventListener('click', (e) =>{
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
        body.style.backgroundColor ='grey'
    }
    if (e.target.id === 'white') {
        body.style.backgroundColor = e.target.id,
        tex.style.color = 'black',
        tex2.style.color = 'black'
        tex3.style.color = 'black'

    }
    if (e.target.id === 'black') {
        body.style.backgroundColor =e.target.id,
        tex.style.color = 'white',
        tex2.style.color = 'white',
        tex3.style.color = 'white'
        
    }
    if (e.target.id === 'blue') {
        body.style.backgroundColor =e.target.id
    }
    // if (e.target.id === 'black') {
    //     tex.style.color= 'white'
    // }


})
})