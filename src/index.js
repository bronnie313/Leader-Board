import './style.css';
import addData from './modules/addData';

const getData = async () => {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4hUxjWxbhx8eZYEYlSSm/scores/');
    const data = await res.json();
    return data.result;
}