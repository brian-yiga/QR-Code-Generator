// For the 'index.html' page (the QR code input page):
if (window.location.pathname === "/index.html") {
    // Capture the 'QR code' button click event
    document.getElementById('getQrcode').addEventListener('click', function(event) {
        const urlInput = document.getElementById('urlInput').value; // Get the URL from the input field
        if (urlInput) {
            // Redirect to 'getCode.html' with the URL as a query parameter
            window.location.href = `getCode.html?url=${encodeURIComponent(urlInput)}`;
        } else {
            alert('Please enter a URL');
        }
    });
}

// For the 'getCode.html' page (the QR code display page):
if (window.location.pathname === "/getCode.html") {
    // Extract the URL from the query string (e.g., getCode.html?url=someURL)
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');

    if (url) {
        // Generate the QR code using QRCode.js
        const qrcode = new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 228,  // Width of the QR code
            height: 228,  // Height of the QR code
            colorDark: "#ffffff",  // Dark color for the QR code
            colorLight: "#000000",  // Light background color
            correctLevel: QRCode.CorrectLevel.L  // Error correction level (L is the lowest)
        });
    } else {
        alert('No URL found!');
    }
}
