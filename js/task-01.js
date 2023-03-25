


const itemCategory = document.querySelectorAll(".item"); 
console.log(`Number of categories: ${itemCategory.length}`); 
 
itemCategory.forEach((Item) => 
  console.log( 
    `Category: ${Item.firstElementChild.textContent} 
    Elements: ${Item.lastElementChild.children.length}` 
  ) 
);





// const list = document.querySelector('#categories');
// const allItems = list.querySelectorAll(".item")
// const numbers = list.children.length;


// console.log(`Numbers: ${numbers}`);


// allItems.forEach((element) => {
//     const tittle = element.querySelector('h2');
    
//     const elements = element.querySelector("ul").children.length;
   

//     console.log(`category : ${tittle.textContent}  elements : ${elements}`)
    
// });




















