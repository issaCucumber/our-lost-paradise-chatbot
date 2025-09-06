// DOM elements
const modal = document.getElementById("disclaimer-modal");
const acceptBtn = document.getElementById("accept-btn");
const declineBtn = document.getElementById("decline-btn");
const backBtn = document.getElementById("back-btn");
const input = document.getElementById("chat-text");
const messages = document.getElementById("chat-messages");
const chatHeader = document.getElementById("chat-character");
const rulesBox = document.getElementById("rules-box");
const characterPic = document.getElementById("character-pic");

// Get character from URL
const urlParams = new URLSearchParams(window.location.search);
const character = urlParams.get("character") || "角色";
chatHeader.textContent = character;

// Set character profile picture
characterPic.src = `images/${character}_profile_pic.png`;

// Character-specific story-like rules
const rulesData = {
  Eugene: [
    "你遇見了 Eugene，一位二十多歲的舞台之星，回到了他熱愛的舞蹈世界。",
    "和他聊天時，可以談談他的生活、舞蹈表演，或他滿懷熱情的故事。",
    "如果提到 Nathan，他可能只會輕描淡寫。",
    "試著與 Eugene 建立友誼，他或許會願意分享更多內心的小秘密。"
  ].join("\n"),

  Nathan: [
    "眼前的 Nathan 是一位接近五十歲的成熟男士，剛失去了工作，婚姻也遇到挑戰。",
    "你可以與他聊他的生活、女兒，以及他對未來的想法。",
    "對於 Eugene 或那晚三藩市的事件，他可能會保持沉默。",
    "小心慢慢打開他的心扉，建立信任，他才可能願意傾訴。"
  ].join("\n")
};

// Display rules
rulesBox.textContent = rulesData[character] || "此角色暫無規則。";

// Back button in header
backBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Back button in modal
declineBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Start Chat button
acceptBtn.addEventListener("click", () => {
  acceptBtn.disabled = true;
  acceptBtn.textContent = "準備中 / Starting...";
  modal.style.display = "none";
  input.focus();
});

// Chat input
const form = document.getElementById("chat-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  // Simulate AI reply
  setTimeout(() => {
    addMessage(`🤖 ${character} 回應你：「${text}」`, "bot");
  }, 900);
});

// Add message helper
function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = `message ${sender}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}
