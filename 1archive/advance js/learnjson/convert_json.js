// converting javascript object to json using JSON.stringify

const user = {
    name: 'John',
    age: 30,
    email: 'abc@gmail.com',
    isStudent : false,
    hobbies: ['reading', 'coding', 'gaming'],


}

const userJSON = JSON.stringify(user);

console.log(userJSON);

const userObj = JSON.parse(userJSON);