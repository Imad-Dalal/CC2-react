import axios from 'axios';

const API_URL = 'https://gahi-said.com/apis/auteurs.php';

export const fetchLivres = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; 
  } catch (error) {
    console.error('Error fetching livres:', error);
    throw error;
  }
};
