//link for sprites
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
const container = document.querySelector('#container');
let newImg = document.createElement('img');
rawUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i < 1011; i++) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let newImg = document.createElement('img');

    newImg.src = `${rawUrl}${i}.png`
    newImg.style.display = 'block'
    div.style.textAlign = 'center'
    div.style.display = 'inline-block'
    span.innerText = `#${i}`
    
    div.appendChild(newImg)
    div.appendChild(span)
    container.appendChild(div)
}

let div = document.querySelectorAll('div');

div.forEach(x =>{
    x.onmouseenter = function (){
        x.style.border = '2px solid black'
        x.style.backgroundColor = 'yellow'
    }
    x.onmouseleave = function (){
        x.style.border = '0px'
        x.style.backgroundColor = 'white'
    }
})