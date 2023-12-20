'use strict';
const box = document.querySelector ('.js-list');
//KITTEN ONE
const kittenOneImg = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = `Anastacio`;
const kittenOneDesc = `Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy osiblemente.` ;
const kittenOneRace = ``;

const kittenOneNameUp = kittenOneName.toUpperCase();

//KITTEN TWO
const kittenTwoImg = ` https://dev.adalab.es/sphynx-gato.webp `;
const kittenTwoName = ` Fiona `;
const kittenTwoDesc = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…  hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenTwoRace = `Sphynx`;

const kittenTwoNameUp = kittenTwoName.toUpperCase();

//KITTEN THREE
const kittenThreeImg = ` https://dev.adalab.es/maine-coon-cat.webp`;
const kittenThreeName = `Cielo`;
const kittenThreeDesc = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenThreeRace = `Maine Coon`;

const kittenThreeNameUp = kittenThreeName.toUpperCase();

const kittenOne = 
`<li class="card">
 <article> 
 <img class="card_img" src= ${kittenOneImg} /> 
 <h3 class="card_title"> ${kittenOneNameUp} </h3> 
 <h4 class="card_race"> ${kittenOneRace}</h4> 
 <p class="card_description"> ${kittenOneDesc} </p> 
 </article> 
 </li>`;

const kittenTwo = 
`<li class="card"> 
<article> 
<img class="card_img" src= ${kittenTwoImg} /> 
<h3 class="card_title"> ${kittenTwoNameUp} </h3> 
<h4 class="card_race"> ${kittenTwoRace}</h4> 
<p class="card_description"> ${kittenTwoDesc} </p> 
</article>
</li> `;

const kittenThree = 
`<li class="card">
<article>
<img class="card_img" src= ${kittenThreeImg} /> 
<h3 class="card_title">${kittenThreeNameUp}</h3> 
<h4 class="card_race">${kittenThreeRace}</h4> 
<p class="card_description">${kittenThreeDesc} </p> 
</article>
</li> `;

box.innerHTML = kittenOne + kittenTwo + kittenThree;

//Búsqueda por descripcióm


const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

if (kittenOneDesc.includes (descrSearchText)){
    box.innerHTML = kittenOne
    console.log('box');  
}

if (kittenTwoDesc.includes (descrSearchText)){
    box.innerHTML = kittenTwo
    console.log('box');  
}

if (kittenThreeDesc.includes (descrSearchText)){
    box.innerHTML = kittenThree
    console.log('box');  
}


let html = '' ;
if (kittenOneRace === "") {
    html = `Uy que despiste, no sabemos su raza`;
  } else {
    html = kittenOneRace;
  }

