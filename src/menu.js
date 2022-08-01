import recipes from './assets/recipe.jpg'

export function item(){

  
    
     const content=document.querySelector("#content");
     
    

     content.replaceChildren();

    
    

      const menu=document.createElement("img");
      menu.classList.add('image');
      menu.src= recipes;
      menu.alt="Item-image";
      content.appendChild(menu);
 
}