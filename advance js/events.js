const msgclcbtn1 = document.getElementById('msgclcbtn1');
const message = document.getElementById('message1');
const hoverdiv = document.getElementById('hover-me');
const message2 = document.getElementById('message2');
const input1 = document.getElementById('input1');
const form = document.getElementById('userForm');

console.log(form);

console.log(hoverdiv);

console.log(msgclcbtn1); 

// add click event listener to the button
msgclcbtn1.addEventListener('click', () => {
    //alert('Button clicked');
    message.innerHTML = 'Button clicked';
});

hoverdiv.addEventListener('mouseover', () => {
    hoverdiv.style.backgroundColor = 'lightblue';
});
hoverdiv.addEventListener('mouseout', () => {
    hoverdiv.style.backgroundColor = '#f4f4f4';
});

input1.addEventListener('input', (e) => {
    message2.innerHTML = e.target.value;
});

