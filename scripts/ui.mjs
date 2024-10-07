//search/filter breeds
export const renderBreedsDropdown = (breeds) => {
    const selectElement = document.getElementById('breed-select');
    selectElement.innerHTML = breeds.map(breed => `
        <option value="${breed.id}">${breed.name}</option>
    `).join('');
};

