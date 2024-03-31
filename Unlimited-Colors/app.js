const randomColors = function (){
    let hex = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() *16)]
    }
    return color;
}
console.log(randomColors());
let interval;
function startChangingColor (){
        if (!interval) {
            interval = setInterval(bgColor,1000 );
        }
        function bgColor (){
        document.body.style.backgroundColor = randomColors();
        }
        
        
}
function stopChangingColor (){
clearInterval(interval);
interval = null;
}
document.querySelector('#start').addEventListener( 'click', startChangingColor)
document.querySelector('#stop').addEventListener( 'click', stopChangingColor)
