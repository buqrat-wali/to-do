let input = document.querySelector('#add');
console.log(input)
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');

btn.addEventListener('click',() => {
    let txt = input.value;
    alert(txt)
    if(txt === ""){
        alert('You must write something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = 'add';
    
    }
})

list.addEventListener('click', e =>{
  
        e.target.classList.toggle('checked');
    
})