const form = document.querySelector('form');

form.addEventListener( 'submit' , function (e){
    e.preventDefault()
    const height =parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#wieght').value);
    const results = document.querySelector('#result');
    const p1 = document.querySelector('#p1')
    const p2 = document.querySelector('#p2')
    const p3 = document.querySelector('#p3')

    if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML =  `Please Give A Valid Height ${height}`
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML =  `Please Give A Valid Weight ${weight}`
    }
    else{
        const bmi = (height / ((height*height)/10000)).toFixed(2);
        results.innerHTML = `${bmi}`
        
    }
} )