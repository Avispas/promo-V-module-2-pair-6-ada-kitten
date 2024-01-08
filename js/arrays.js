'use strict';
const box = document.querySelector('.js-list');
const catList = [
  {
    kittenImg: 'https://dev.adalab.es/gato-siames.webp',
    kittenName: `Anastacio`,
    kittenDesc: `Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy osiblemente.`,
    kittenRace: `Siames`,
  },
  {
    kittenImg: ` https://dev.adalab.es/sphynx-gato.webp `,
    kittenName: ` Fiona `,
    kittenDesc: `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…  hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.`,
    kittenRace: `Sphynx`,
  },
  {
    kittenImg: ` https://dev.adalab.es/maine-coon-cat.webp`,
    kittenName: `Cielo`,
    kittenDesc: `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.`,
    kittenRace: `Maine Coon`,
  },
];
const renderSuperKitten = (cat) => {
  const html = `<li class="card">
 <article> 
 <img class="card_img" src= "${cat.kittenImg}" /> 
 <h3 class="card_title"> ${cat.kittenName} </h3> 
 <h4 class="card_race"> ${cat.kittenRace}</h4> 
 <p class="card_description"> ${cat.kittenDesc} </p> 
 </article> 
 </li>`;
  return html;
};
function appear() {
  box.innerHTML =
    renderSuperKitten(catList[0]) +
    renderSuperKitten(catList[1]) +
    renderSuperKitten(catList[2]);
}
appear();

