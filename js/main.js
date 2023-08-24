let btn = document.getElementById('btn')
let mod = document.getElementById('mod')
let closee = document.getElementById('close')

btn.onclick = function(){
    mod.style.display = 'block'
}

closee.onclick = function(){
    mod.style.display = 'none'
}