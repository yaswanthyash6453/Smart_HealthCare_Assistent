document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const responses = {
    "hi": "Hello! 👋 How can I assist you today?",
    "hello": "Hey there! 😊 What health topic do you want to discuss?",
    "fever": "If you have a fever 🤒, stay hydrated, take rest, and consider paracetamol. If it lasts more than 2 days, see a doctor.",
    "headache": "For headaches 💆‍♂️, rest, drink water, and avoid screen time. If it's frequent, consult a doctor.",
    "cold": "For common cold 🤧, drink warm fluids and rest. If it persists, you may need a doctor’s advice.",
    "bmi": "BMI (Body Mass Index) = weight (kg) / height² (m²). You can calculate it on our BMI page!",
    "healthy diet": "🍎 A healthy diet includes fruits, vegetables, lean proteins, and whole grains. Avoid junk food!",
    "covid": "If you suspect COVID symptoms 🦠, isolate and get tested. Seek immediate help if breathing is difficult.",
    "thanks": "You're welcome! 😊 Stay healthy and happy!",
    "bye": "Goodbye 👋 Take care of your health!"
  };

  sendBtn.addEventListener("click", () => sendMessage());
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const message = userInput.value.trim().toLowerCase();
    if (message === "") return;

    // Add user message
    addMessage(message, "user-message");
    userInput.value = "";

    // Bot response
    setTimeout(() => {
      let reply = responses[message] || "🤖 I'm not sure about that. Try asking about 'fever', 'bmi', or 'diet'.";
      addMessage(reply, "bot-message");
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
  }

  function addMessage(text, className) {
    const msgDiv = document.createElement("div");
    msgDiv.className = className;
    msgDiv.textContent = text;
    chatBox.appendChild(msgDiv);
  }
});
