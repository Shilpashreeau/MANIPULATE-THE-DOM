let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  /*DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.*/
const title=document.getElementById('main-title');
title.textContent="DOM Toretto";
console.log(title);


  // Part 2
//Select the body and change the background-color to a new color of your choice.
const body=document.querySelector('body');
body.style.backgroundColor='#bde0fe';

  // Part 3
//Select DOM's Favorite Things list and remove the last list item.
const ul=document.getElementById("favorite-things");
//console.log(ul);
const favLis=ul.querySelectorAll('li');
console.log(favLis);
ul.removeChild(ul.lastElementChild)
console.log(ul);


  // Part 4
//Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements
//const specialClass=document.getElementsByClassName("special-title" );
const specialClass=document.querySelectorAll(".special-title");
console.log(specialClass);
specialClass.forEach(element => {
  element.style.fontSize='2rem';
});
// specialClass[0].
// console.log(specialClass[1].textContent);




  // Part 5

//Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
const pastRaces=document.getElementById("past-races");
const cityLis=pastRaces.querySelectorAll('li');
console.log(cityLis);
cityLis.forEach(city=>{
  //if(pastRaces.hasChildNodes()==='Chicago'){
if(city.innerHTML==='Chicago'){
  city.remove();
}
console.log(cityLis);
})

  // Part 6
  /*Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.*/
  const li=document.createElement('li');
  li.textContent='Pittsburgh';
  console.log(li);
 // let updatedRaces=pastRaces.append(li);
 pastRaces.append(li);
  console.log(pastRaces);



  // Part 7
/*Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.*/


  // Part 8


  // Part 9




});
