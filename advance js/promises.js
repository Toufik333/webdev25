// promises resolve and reject

const myPromise = new Promise((resolve, reject) => {
    let connection = true;
    if (connection) {
        resolve("Connection established");
    } else {
        reject("Connection failed");
    }
    }
);

//handling promises
myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    });