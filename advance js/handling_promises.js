// using than and catch and finally
// then() => promise resolved
// catch() => promise rejected
// finally() => always executed

const fetchData = () => {
    return new Promise((resolve, reject) => {
        const connection = true;
        setTimeout(() => {
            if (connection) {
                resolve("Data fetched successfully");
            } else {
                reject("Data fetching failed");
            }
        }, 2000);
    });
};

fetchData().then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
}).finally(() => {
    console.log("Data fetching process completed");
});