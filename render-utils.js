import { getPlane } from './fetch-utils.js';

export function renderPlaneCard(plane){
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('plane-card');

    p.textContent = plane.model;
    a.href = `./details/?id=${plane.id}`;

    div.append(p, img);

    a.append(div);
   
    return a;

}

export function renderPlaneDetail(plane){
    
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const modelEl = document.createElement('p');
    const engineEl = document.createElement('p');
    const passengerEl = document.createElement('p');
    const speedEl = document.createElement('p');

    div.classList.add('plane-detail');

    modelEl.textContent = plane.model;
    modelEl.classList.add('model');

    engineEl.textContent = plane.engine;
    engineEl.classList.add('engine');

    passengerEl.textContent = plane.passenger;
    passengerEl.classList.add('passenger');

    speedEl.textContent = plane.speed;
    speedEl.classList.add('speed');

    img.src = `../assets/plane-${plane.id}.jpg`;
    img.classList.add('image');
    
    descriptionEl.textContent = plane.description;
    descriptionEl.classList.add('model');

    div.append(modelEl, img, engineEl, passengerEl, speedEl, descriptionEl);

console.log(div);

    return div;
}