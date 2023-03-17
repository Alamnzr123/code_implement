// panggil package node-fetch
import fetch from 'node-fetch';

const GetData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}

GetData();