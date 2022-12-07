import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID BVo5fd67Z_9YqwTgg9WevhfNFDegCsApytd7MZdfo7I'
        },
        params: {
            query: 'cars'
        }
    })
    return response
};

export default searchImages;