'use strict';
// const box = document.querySelector('.js-list');

// //KITTEN ONE
// const catOne = {
//   kittenOneImg: 'https://dev.adalab.es/gato-siames.webp',
//   kittenOneName: `Anastacio`,
//   kittenOneDesc: `Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy osiblemente.`,
//   kittenOneRace: `Siames`,
// };


// const kittenOneNameUp = catOne.kittenOneName.toUpperCase();

// //KITTEN TWO
// const catTwo = {
//   kittenTwoImg: ` https://dev.adalab.es/sphynx-gato.webp `,
//   kittenTwoName: ` Fiona `,
//   kittenTwoDesc: `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…  hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.`,
//   kittenTwoRace: `Sphynx`,
// };
// const kittenTwoNameUp = catTwo.kittenTwoName.toUpperCase();

// //KITTEN THREE
// const catThree = {
//   kittenThreeImg: ` https://dev.adalab.es/maine-coon-cat.webp`,
//   kittenThreeName: `Cielo`,
//   kittenThreeDesc: `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.`,
//   kittenThreeRace: `Maine Coon`,
// };
// const kittenThreeNameUp = catThree.kittenThreeName.toUpperCase();

// const kittenOne = 
// `<li class="card">
//  <article> 
//  <img class="card_img" src= ${catOne.kittenOneImg} /> 
//  <h3 class="card_title"> ${kittenOneNameUp} </h3> 
//  <h4 class="card_race"> ${catOne.kittenOneRace}</h4> 
//  <p class="card_description"> ${catOne.kittenOneDesc} </p> 
//  </article> 
//  </li>`;

// const kittenTwo = 
// `<li class="card"> 
// <article> 
// <img class="card_img" src= ${catTwo.kittenTwoImg} /> 
// <h3 class="card_title"> ${kittenTwoNameUp} </h3> 
// <h4 class="card_race"> ${catTwo.kittenTwoRace}</h4> 
// <p class="card_description"> ${catTwo.kittenTwoDesc} </p> 
// </article>
// </li> `;

// const kittenThree = 
// `<li class="card">
// <article>
// <img class="card_img" src= ${catThree.kittenThreeImg} /> 
// <h3 class="card_title">${kittenThreeNameUp}</h3> 
// <h4 class="card_race">${catThree.kittenThreeRace}</h4> 
// <p class="card_description">${catThree.kittenThreeDesc} </p> 
// </article>
// </li> `;

// box.innerHTML = kittenOne + kittenTwo + kittenThree;

//Búsqueda por descripcióm0

function searchCat(event) {
  event.preventDefault();
  const input_search_desc = document.querySelector('.js_in_search_desc');
  console.log(input_search_desc);
  const descrSearchText = input_search_desc.value;
  console.log(descrSearchText);
  if (catOne.kittenOneDesc.includes(descrSearchText)) {
    box.innerHTML = kittenOne;
  }
  else if(catTwo.kittenTwoDesc.includes(descrSearchText)) {
    box.innerHTML = kittenTwo;
  }
  else if (catTree.kittenThreeDesc.includes(descrSearchText)) {
    box.innerHTML = kittenThree;
  }
};
const btnSearch = document.querySelector('.js-button-search');
btnSearch.addEventListener('click', searchCat);


// Bonues 2.3 condicionales
//let html = '' ;
//if (kittenOneRace === "") {
//html = `Uy que despiste, no sabemos su raza`;
//} else {
//html = kittenOneRace;
//}



//MOSTRAR OCULTAR FORMULARIO
const newForm = document.querySelector('.js-new-form');
function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}
function handleClickNewCatForm() {
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
const linkNewFormElement = document.querySelector('.fa-plus-circle');

linkNewFormElement.addEventListener('click', handleClickNewCatForm);




const btnAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;

formSection.addEventListener('click', () => {});

btnAdd.addEventListener('click', () => {
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = `¡Uy! parece que has olvidado algo`;
  } else {
  }
});
