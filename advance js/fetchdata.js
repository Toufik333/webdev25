// practical example of fetch api

const fetchdata = () => {
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }

}