import { getPlane, getPlanes } from '../fetch-utils.js';
import { renderPlaneCard, renderPlaneDetail } from '../render-utils.js';


const airplaneDetailContainer = document.getElementById('airplane-detail-container');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const plane = await getPlane(id);

    const planeDetailEl = await renderPlaneDetail(plane);

    airplaneDetailContainer.append(planeDetailEl);

});