const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map\
const square = numbers.map((x) => x ** 2); // copy of array

square[0] = 100;
//console.log(numbers);
//console.log(square);
//filter() method creates a new array with all elements that pass the test implemented by the provided function.

const even = numbers.filter((x) => x % 2 === 0);
//console.log(even);

//reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// find() method returns the value of the first element in the provided array that satisfies the provided testing function.

    const users = [
        { name: "John", age: 34 },
        { name: "Amy", age: 20 },
        { name: "cam", age: 25 },
        ];

const user = users.find((user) => user.name === "Amy");
//console.log(user);
const user2 = users.filter((user) => user.age > 20);
console.log(user2);

// some() method tests whether at least one element in the array passes the test implemented by the provided function.
const isAdult = users.some((user) => user.age >= 18);
console.log(isAdult);