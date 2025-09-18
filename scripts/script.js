document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    let chatData = {};

    // Load the JSON data
    fetch('words.json')
        .then(response => response.json())
        .then(data => {
            chatData = data;
            console.log("Chat data loaded:", chatData); // For debugging
        })
        .catch(error => console.error("Error loading chat data:", error));

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
        addMessage(userMessage, "user-bubble");
        messageInput.value = "";
        
        // Get David's response and add it
        setTimeout(() => {
            const davidResponse = getDavidResponse(userMessage);
            addMessage(davidResponse, "david-bubble");
        }, 1000);
    }

    function addMessage(text, bubbleClass) {
        const bubble = document.createElement("div");
        bubble.classList.add("chat-bubble", bubbleClass);
        bubble.textContent = text;
        chatBox.appendChild(bubble);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getDavidResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        
        // Check for specific keywords and return a random response from the JSON file
        if (lowerCaseMessage.includes("roblox")) {
            return getRandomResponse(chatData.roblox);
        } else if (lowerCaseMessage.includes("swimming")) {
            return getRandomResponse(chatData.swimming);
        } else if (lowerCaseMessage.includes("how are you")) {
            return getRandomResponse(chatData.questions["how are you"]);
        } else if (lowerCaseMessage.includes("what is your name")) {
            return getRandomResponse(chatData.questions["what is your name"]);
        } else if (lowerCaseMessage.includes("do you like games")) {
            return getRandomResponse(chatData.questions["do you like games"]);
        } else if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            return getRandomResponse(chatData.greetings);
        } else {
            return getRandomResponse(chatData.default);
        }
    }

    // Helper function to get a random response from an array
    function getRandomResponse(responses) {
        if (!responses || responses.length === 0) {
            return "I'm not sure how to respond to that.";
        }
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }
});