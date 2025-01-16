const generateCode = document.getElementById('getQrcode');
const urlInput = document.getElementById('urlInput');

//add event listener
urlInput.addEventListener('click', function(){
const url = urlInput.value

    if(urlInput.trim() === '') {
        alert('Please Enter a URL')
        return;
    } 

    document.getElementById('qrcode').textContent='';

    new QRCode(document.getElementById('qrcode'), {
        text: url,
        width: 128,
        height: 128
    })
})