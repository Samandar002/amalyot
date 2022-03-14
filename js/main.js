var emoji = document.getElementById('emoji')
var inEmoji = document.getElementById('inEmoji');
var emijies = document.getElementsByClassName('emijies');
var textarea = document.getElementById('article__textarea');

var content = document.getElementById('content');
var btn = document.getElementById('article__btn');

var emijiesOne = document.getElementsByClassName('emijiesOne');


btn.addEventListener('click',()=>{
    var ulEl = document.createElement('ul');
    ulEl.classList.add('listEl')
    var liEl = document.createElement('li');
    liEl.textContent = textarea.value;
    ulEl.appendChild(liEl);
    content.appendChild(ulEl);
    textarea.value = ""
})


emoji.addEventListener('click',()=>{
inEmoji.classList.toggle('emojis')
});
