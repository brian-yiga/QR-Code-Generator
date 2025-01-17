if (window.location.pathname === "/index.html") {
  document
    .getElementById("getQrcode")
    .addEventListener("click", function (event) {
      const urlInput = document.getElementById("urlInput").value;
      if (urlInput) {
        window.location.href = `getCode.html?url=${encodeURIComponent(
          urlInput
        )}`;
      } else {
        alert("Please enter a URL");
      }
    });
}

if (window.location.pathname === "/getCode.html") {
  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get("url");

  if (url) {
    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 228,
      height: 228,
      colorDark: "#ffffff",
      colorLight: "#000000",
      correctLevel: QRCode.CorrectLevel.L,
    });
  } else {
    alert("No URL found!");
  }
}

const download = document.getElementById("download");

download.addEventListener("click", function () {
  const qrCodeElement = document.getElementById("qrcode").querySelector("img");
  if (qrCodeElement) {
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrCodeElement.src;

    link.click();
  } else {
    alert("QR Code not generated yet");
  }
});

const shareButton = document.getElementById('share');

shareButton.addEventListener('click', function() {
    console.log('Button Clicked')


const qrCodeElement = document.getElementById("qrcode").querySelector("img");
if (!qrCodeElement) {
    alert('QR Code not generated yet');
    return;
}

if (navigator.share) {
    // Create a temporary image URL (Blob URL)
    const imageUrl = qrCodeElement.src; // Get the src from the img element
    
    // Convert the image URL to a Blob and create a file
    fetch(imageUrl)
        .then(res => res.blob())
        .then(blob => {
            const file = new File([blob], "qrcode.png", { type: "image/png" });

            // Share the file using the Web Share API
            navigator.share({
                title: 'QR Code',
                text: 'Check out this QR code!',
                files: [file]  // Share the image as a file
            })
            .then(() => console.log('QR Code shared successfully!'))
            .catch((error) => console.log('Error sharing:', error));
        });
} else {
    alert('Sharing is not supported in this browser.');
}
});
