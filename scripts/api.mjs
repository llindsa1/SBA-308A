import axios from 'axios';
const API_BASE_URL = 'https://api.thedogapi.com/v1';
const API_KEY = 'live_o8PLV62jhx0qzHwWPXevGwFUxbcchzkVFECyGLCBTwQb5WuiuBlOY26y9L3ix90u';

//List of Dog breeds
export const fetchBreeds = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/breeds`, {
            Headers: {
                'x-api-key': API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching breeds:", error);
    }
};

//Breed Images
export const fetchImagesByBreed = async (breed_id,limit=9) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/images/search`, {
            params: {
                breed_id,
                limit,
            },
            Headers: {
                'x-api-key': API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching images:", error);
    }
};

