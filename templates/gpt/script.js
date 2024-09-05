// JavaScript to handle content generation, copy to clipboard, and WhatsApp sharing
document.getElementById("generate").addEventListener("click", function () {
  // Get input values
  const name = document.getElementById("name").value;
  const place = document.getElementById("place").value;
  const time = document.getElementById("time").value;
  const date = document.getElementById("date").value;

  // Template for content generation
  const template = `
    ⭐🌍 *I LOVE ATOMY INDIA🌍⭐
    📝शिक्षा के बिना सफलता असंभव है, इसलिए आइए सीखें✍✍✍🧭
    🙏नमस्कार, मैं श्रीमती ${name} मैम {${place} से} आप सभी को ${date} के दिन ${time} बजे होने वाले प्रशिक्षण सत्र में स्वागत करती हूँ🙏

    नीचे दिए गए लिंक पर क्लिक करके बैठक में शामिल हो सकते हैं:
    https://meet.google.com/qpc-yiwb-vzu
    `;

  // Display generated content
  document.getElementById("outputText").textContent = template;
});

// Copy to Clipboard
document.getElementById("copyButton").addEventListener("click", function () {
  const content = document.getElementById("outputText").textContent;
  navigator.clipboard
    .writeText(content)
    .then(() => {
      alert("Content copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});

// Send to WhatsApp
document
  .getElementById("whatsappButton")
  .addEventListener("click", function () {
    const content = document.getElementById("outputText").textContent;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      content
    )}`;
    window.open(whatsappUrl, "_blank");
  });
