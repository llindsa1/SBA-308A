//search/filter breeds
export const renderBreedsDropdown = (breeds) => {
    const selectElement = document.getElementById('breed-select');
    selectElement.innerHTML = breeds.map(breed => `
        <option value="${breed.id}">${breed.name}</option>
    `).join('');
};

//Image gallery
export const renderImageGallery = (images) => {
    const galleryElement = document.getElementById('gallery');
    galleryElement.innerHTML = images.map(image => `
        <div class="gallery-item">
        <img src="${image.url}" alt="Dog Image">
        <button data-id="${image.id}" class="save-favorite-btn">Save as Favorite</button>
        </div>
        `).join('');
};

//Notifications
export const showNotification = (message) => {
    const notificationElement = document.getElementById('notification');
    notificationElement.textContent = message;
    notificationElement.style.display = 'block';
    setTimeout (() => {
        notificationElement.style.display = 'none';
    }, 3000);
};
