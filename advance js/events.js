const msgclcbtn1 = document.getElementById('msgclcbtn1');
const message = document.getElementById('message1');
const hoverdiv = document.getElementById('hover-me');
const message2 = document.getElementById('message2');
const input1 = document.getElementById('input1');
const form = document.getElementById('userForm');


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

// form submit event

const name = form.elements['username'];
const email = form.elements['email'];
const password = form.elements['password'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Name: ",name.value);
    console.log("Email: ",email.value);

    if(!email.value.includes('@')){
        alert('Invalid email');
    }
    else if(!name.value || !email.value || !password.value){
        alert('Please fill all the fields');
    }
    else{
        alert('Form submitted');
    }

});

