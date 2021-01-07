// UI Selectors
const txtBtnWrap = document.querySelector('.text-btn-wrap');
const ovrlaytxt = document.querySelector('.overlay-text');
const demoText = document.getElementById('demoText');
const uploadInput = document.querySelector('#uploadInput');
const animationBtnWrap = document.querySelector('.animation-btn-wrap');

// Upload Images File Input
uploadInput.addEventListener('change', (e) => {
    const previewImage = document.querySelector('#thumbnail');
    previewImage.src = URL.createObjectURL(e.target.files[0]);
});

// Input two way Bindings
demoText.addEventListener('keyup', (e) => {
    ovrlaytxt.innerText = e.target.value;
});
