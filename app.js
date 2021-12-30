// import functions and grab DOM elements
import { getPlanes, getPlane } from './fetch-utils.js';
import { renderPlaneCard, renderPlaneDetail } from './render-utils.js';
// let state
const airplaneContainer = document.getElementById('airplanes-container');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
window.addEventListener('load', async() => {

    const planes = await getPlanes();

    for (let plane of planes) {
        const planeEl = renderPlaneCard(plane);
        
        console.log(planes);
        
        airplaneContainer.append(planeEl);

        // return planes;
    }
});

