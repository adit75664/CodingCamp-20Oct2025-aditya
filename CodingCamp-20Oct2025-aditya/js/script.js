welcomeSpeech();

function welcomeSpeech() {
    // Show prompt to ask for user's name
    let name = prompt("Enter your name:");

    // Greet the user with their name
    document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
}
