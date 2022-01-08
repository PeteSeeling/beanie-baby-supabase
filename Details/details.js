import { getPlane } from '../fetch-utils.js';
import { renderPlaneDetail } from '../render-utils.js';

const airplaneDetailContainerEl = document.getElementById('airplane-detail-container');

window.addEventListener('load', async() =>{
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const planeDetail = await getPlane(id);

    const detailsEl = renderPlaneDetail(planeDetail);

    airplaneDetailContainerEl.append(detailsEl);
});
console.log(id)