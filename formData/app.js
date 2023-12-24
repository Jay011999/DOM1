let btn=document.getElementById('button');

btn.addEventListener('click',updateText);

function updateText(){
    let name=document.getElementById('name').value;
    let animal=document.getElementById('animal').value;
    console.log(name,animal);
    let textMessage=document.getElementById('message');
    textMessage.innerText=`Hey ${name}, can i have your ${animal}`;
}