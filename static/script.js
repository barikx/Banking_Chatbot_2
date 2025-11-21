function toggleChat() {
  const chat = document.getElementById("chatContainer");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function addMessage(content, sender) {
  const chatBox = document.getElementById("chatBox");
  const msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.textContent = content;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendQuickQuestion(text) {
  document.getElementById("textInput").value = text;
  sendText(); // This triggers the existing sendText() logic
}


function removeLastBotMessage() {
  const chatBox = document.getElementById("chatBox");
  const messages = chatBox.getElementsByClassName("message bot");
  if (messages.length > 0) {
    messages[messages.length - 1].remove();
  }
}

async function sendText() {
  const input = document.getElementById("textInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  const res = await fetch("/chat/text", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ text }),
  });

  const data = await res.json();
  addMessage(data.response, "bot");
}

let mediaRecorder;
let audioChunks = [];

function startRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      addMessage("🎙️ Listening...", "bot");

      mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = sendRecordedAudio;
      mediaRecorder.start();

      setTimeout(() => {
        mediaRecorder.stop();
      }, 4000);
    })
    .catch(error => {
      alert("Mic access denied or unavailable.");
      console.error(error);
    });
}

async function sendRecordedAudio() {
  const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
  const formData = new FormData();
  formData.append("audio", audioBlob, "recorded.wav");

  removeLastBotMessage();

  const res = await fetch("/chat/audio", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (data.error) {
    addMessage("❌ " + data.error, "bot");
  } else {
    addMessage(data.query, "user");
    addMessage(data.response, "bot");
  }
}
