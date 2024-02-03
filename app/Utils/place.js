import axios from 'axios';

export default function(props){
    const temp= async() => {
        const place=await axios.get("https://nominatim.openstreetmap.org/search?format=json&q=bangalore")
    };
    temp();
    return place;
}