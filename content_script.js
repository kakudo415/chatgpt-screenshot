function captureChatGPT() {
  const chatContainer = document.querySelector("main");

  html2canvas(chatContainer).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "chatgpt-screenshot.png";
    link.click();
  });
}

if (document.querySelector("main")) {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "captureChatGPT") {
      captureChatGPT();
    }
  });
} else {
  console.error("ChatGPT container not found.");
}