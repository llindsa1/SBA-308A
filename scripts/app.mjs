import { fetchBreeds, fetchImagesByBreed } from "./api.mjs";
import { renderBreedsDropdown, renderImageGallery, showNotification } from "./ui.mjs";
const initApp = async () => {
    const breeds = await fetchBreeds();
    renderBreedsDropdown(breeds);

const breedSelect = document.getElementById('breed-select');
breedSelect.addEventListener('change', async (event) => {
    const breed_id = event.target.value;
    const images = await fetchImagesByBreed(breed_id);
    renderImageGallery(images);
});
};

window.onload = () => {
    initApp();
};
