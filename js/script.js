const button= document.getElementById('button')
const tabella=document.getElementById('tabellone')
const btnRis= document.getElementById('btnRis')

for(i = 0;i<76;i++){
    const div= document.createElement('div')
    div.classList.add('caselle')
    div.innerText= i + 1
    tabella.appendChild(div)
}
button.addEventListener('click', function(){
    const random= Math.floor(Math.random()*76)+1
    btnRis.innerText= random
    const celle= document.querySelectorAll('.caselle')
    for(i = 0;i< celle.length;i++){
        if(random == celle[i].innerText){
            celle[i].classList.add('evidenziata')
        }
    }
})
