function captureChat() {
  const chatContainer = document.querySelector('main'); // チャット入力と出力を含む要素を選択
  if (!chatContainer) {
    alert('ChatGPT container not found.');
    return;
  }

  html2canvas(chatContainer, { logging: false, useCORS: true }).then(canvas => {
    const imageDataUrl = canvas.toDataURL('image/png'); // キャンバスをPNG形式で出力
    const link = document.createElement('a');
    link.href = imageDataUrl;
    link.download = `chatgpt_screenshot_${Date.now()}.png`;
    link.click();
  });
}

captureChat();