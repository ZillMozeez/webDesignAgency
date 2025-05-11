const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const errorMessage = document.getElementById("error");

form.addEventListener('submit', (e) => {
    let messages = [];
    if(name.value === '' || name.value == null){
        messages.push('Name is required')
    }
    if(email.value === '' || email.value == null){
        messages.push('Email is required')
    }
    if(message.value === '' || message.value == null){
        messages.push('Write a message')
    }

    if(messages.length > 0){
        e.preventDefault();
        errorMessage.innerText = messages.join(', ');
    }
});

function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_dmxse6z", "template_ud8lsjn", params).then(alert("Message sent!"))
}