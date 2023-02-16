import axios from 'axios';

export async function getCategories() {
    // let response = 0;

    // try {
    //     await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    //     .then(res => {
    //         const resp = res.data;

    //         response = resp;
    //     });
    // } catch (e) {
    //     response = e;
    // }

    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((res) =>  console.log(res.data));

    // return response;
}
