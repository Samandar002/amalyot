var frend = document.getElementById('frend');
var articleFrend = document.getElementById('articleFrend');
var articleAdd = document.getElementById('articleAdd');
var navbar = document.getElementById('navbar');



navbar.addEventListener('click',()=>{
    articleAdd.classList.toggle('addd');

})

frend.addEventListener('click',()=>{
    articleFrend.classList.toggle('frendTuit')
})

var pencil = document.getElementById('pencil');
var pencilChannel = document.getElementById('pencil-channel');

pencil.addEventListener('click',()=>{
    pencilChannel.classList.toggle('pancil-group');
})

