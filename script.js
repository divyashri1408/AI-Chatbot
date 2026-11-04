function sendMessage() {
    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    let message = input.value.trim();

    if (message === "") {
        return;
    }

    let userMessage = document.createElement("p");
    userMessage.innerText = "You: " + message;
    chatBox.appendChild(userMessage);

    let reply = "Hello! How can I help you?";

    if (message.toLowerCase().includes("hello")) {
        reply = "Hello! Welcome to AI Chatbot!";
    }
    else if (message.toLowerCase().includes("hi")) {
        reply = "Hi! Nice to meet you!";
    }
    else if (message.toLowerCase().includes("name")) {
        reply = "I am your AI Chatbot!";
    }
    else if (message.toLowerCase().includes("bye")) {
        reply = "Goodbye! Have a nice day!";
    }

    let botMessage = document.createElement("p");
    botMessage.innerText = "Bot: " + reply;
    chatBox.appendChild(botMessage);

    input.value = "";
}
