document.addEventListener('DOMContentLoaded', () => {
    const userName = prompt("What's your name?");
    const nameMessage = document.getElementById('name-message');

    if (userName) {
        nameMessage.textContent = `Hello, ${userName}! Welcome to my website.`;
    } else {
        nameMessage.textContent = `Hello! Welcome to my website.`;
    }
});