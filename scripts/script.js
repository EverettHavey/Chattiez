document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = messageInput.value.trim();
        if (userMessage === "") return;

        // Add user message to the chat
        const userBubble = document.createElement("div");
        userBubble.classList.add("chat-bubble", "user-bubble");
        userBubble.textContent = userMessage;
        chatBox.appendChild(userBubble);

        // Clear the input field
        messageInput.value = "";
        
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simulate David's response
        setTimeout(() => {
            const davidBubble = document.createElement("div");
            davidBubble.classList.add("chat-bubble", "david-bubble");
            davidBubble.textContent = getDavidResponse(userMessage);
            chatBox.appendChild(davidBubble);
            
            // Scroll to the bottom again
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }

    function getDavidResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();

        // Specific responses
        if (lowerCaseMessage.includes("go swimming")) {
            return "Sure! I'd love to go swimming. What time works for you?";
        }
        
        // Yes/No questions and other common phrases
        if (lowerCaseMessage.includes("how are you")) {
            return "I'm doing great, thanks for asking! What about you?";
        } else if (lowerCaseMessage.includes("do you like games")) {
            return "Yes, I really enjoy playing games. Do you have a favorite?";
        } else if (lowerCaseMessage.includes("can you help me")) {
            return "I will certainly try. What do you need help with?";
        } else if (lowerCaseMessage.includes("are you a robot")) {
            return "No, I'm a chat character here to talk with you. Do you think I sound like one?";
        } else if (lowerCaseMessage.includes("is it raining")) {
            return "I can't check the weather, but I can talk to you about anything else!";
        } else if (lowerCaseMessage.includes("what is your favorite color")) {
            return "I like the color blue. Do you have a favorite color?";
        } else if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            return "Hey there! It's great to hear from you.";
        } else if (lowerCaseMessage.includes("your name")) {
            return "My name is David. What's yours?";
        } else if (lowerCaseMessage.includes("bye") || lowerCaseMessage.includes("goodbye")) {
            return "It was great chatting with you! Talk to you later!";
        } else {
            return "That's an interesting point. Can you tell me more about it?";
        }
    }
});