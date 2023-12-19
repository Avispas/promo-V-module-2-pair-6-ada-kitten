'use strict';
const box = document.querySelector ('.js-list');
//KITTEN ONE
const kittenOneImg = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = `Anastacio`;
const kittenOneDesc = `Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy osiblemente.` ;
const kittenOneRace = `Siamés`;



//KITTEN TWO
const kittenTwoImg = ` https://dev.adalab.es/sphynx-gato.webp `;
const kittenTwoName = ` Fiona `;
const kittenTwoDesc = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…  hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenTwoRace = `Sphynx`;



//KITTEN THREE
const kittenThreeImg = ` https://dev.adalab.es/maine-coon-cat.webp`;
const kittenThreeName = `Cielo`;
const kittenThreeDesc = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenThreeRace = `Maine Coon`;

const kittenOne = 
`<li class="card">
 <article> 
 <img class="card_img" src= ${kittenOneImg} /> 
 <h3 class="card_title"> ${kittenOneName} </h3> 
 <h4 class="card_race"> ${kittenOneRace}</h4> 
 <p class="card_description"> ${kittenOneDesc} </p> 
 </article> 
 </li>`;



const kittenTwo = 
`<li class="card"> 
<article> 
<img class="card_img" src= ${kittenTwoImg} /> 
<h3 class="card_title"> ${kittenTwoName} </h3> 
<h4 class="card_race"> ${kittenTwoRace}</h4> 
<p class="card_description"> ${kittenTwoDesc} </p> 
</article>
</li> `;


const kittenThree = 
`<li class="card">
<article>
<img class="card_img" src= ${kittenThreeImg} /> 
<h3 class="card_title">${kittenThreeName}</h3> 
<h4 class="card_race">${kittenThreeRace}</h4> 
<p class="card_description">${kittenThreeDesc} </p> 
</article>
</li> `;

box.innerHTML = kittenOne + kittenTwo + kittenThree;




