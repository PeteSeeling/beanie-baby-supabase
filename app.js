
import { getPlanes } from './fetch-utils.js';
import { renderPlaneCard } from './render-utils.js';

const airplaneContainer = document.getElementById('airplanes-container');

window.addEventListener('load', async() => {

    const planes = await getPlanes();

    for (let plane of planes) {
        const planeEl = renderPlaneCard(plane);
        
        airplaneContainer.append(planeEl);

    }
});

