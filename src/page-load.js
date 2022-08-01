import resta1 from './assets/resta1.jpg';
export function load(){
     let content=document.querySelector('#content');
     content.replaceChildren();

    
     const resta=document.createElement('img');
     resta.classList.add('image');
     resta.src= resta1;
     resta.alt="image of restarant";
     content.append(resta);

     const head=document.createElement('p');
     head.innerText="Order Tasty & Fresh Food";

head.classList.add('title1');
content.append(head);

}
 