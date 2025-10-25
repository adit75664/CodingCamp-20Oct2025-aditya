welcomeSpeech();

function welcomeSpeech() {
    // Show prompt to ask for user's name
    let name = prompt("Enter your name:");

    // Greet the user with their name
    document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
}


function validateForm() {
    //get form input value
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    console.log(name,email,message);

    //check if any field is empty
    if (name === "" || email === "" || message === "") {
        //show alert if any field empty
        alert("All fields are required!");
    } else {
        //show succes message
        alert(`Thank you ${name}, your message has been submitted successfully!`);
    }
}
