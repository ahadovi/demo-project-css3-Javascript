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


// Text Style & Button Classes Array
const textBtnClassContent = [
    {
        btnClass: 'btnPrimary active',
        btnContent: 'Montserrat',
        fontFamily: `'Montserrat', sans-serif  `,
    },
    {
        btnClass: 'btnSecondary',
        btnContent: 'Open Sans',
        fontFamily: `'Open Sans', sans-serif`
    },
    {
        btnClass: 'btnSuccess',
        btnContent: 'Lato',
        fontFamily: `'Lato', sans-serif`
    },
    {
        btnClass: 'btnDanger',
        btnContent: 'Raleway',
        fontFamily: `'Raleway', sans-serif`
    },
    {
        btnClass: 'btnWarning',
        btnContent: 'Lora',
        fontFamily: `'Lora', serif`
    },
    {
        btnClass: 'btnInfo',
        btnContent: 'Roboto',
        fontFamily: `'Roboto', sans-serif`
    },
];

// Text Style Button & It's Content
textBtnClassContent.forEach((e) => {
    // Creating Button Inside Text button Wrap
    const textBtn = document.createElement('button');
    // Add Classes in Text changes Buttons
    textBtn.classList = `btn ${e.btnClass}`;
    // Add Style different font family
    textBtn.style.fontFamily = e.fontFamily;

    // Add Contents in Text changes Buttons
    textBtn.innerText = e.btnContent;
    // button DOM Show
    txtBtnWrap.appendChild(textBtn);

    // Every Button click changes overlay text Font
    textBtn.addEventListener('click', (el) => {
        ovrlaytxt.style.fontFamily = e.fontFamily;
        activeClass(el, 'text-btn-wrap');
    });
});

// Animation Content & Button Classes Array
const animationBtnStyles = [
    {
        btnName: 'Bounce',
        btnClass: 'btnPrimary',
        animateClass: 'animate__bounce'
    },
    {
        btnName: 'Rubber Band',
        btnClass: 'btnSecondary',
        animateClass: 'animate__rubberBand'
    },
    {
        btnName: 'Wobble',
        btnClass: 'btnSuccess',
        animateClass: 'animate__wobble'
    },
    {
        btnName: 'Flip In X',
        btnClass: 'btnDanger',
        animateClass: 'animate__flipInX'
    },
    {
        btnName: 'Jack In TheBox',
        btnClass: 'btnWarning',
        animateClass: 'animate__jackInTheBox'
    },
    {
        btnName: 'Hinge',
        btnClass: 'btnInfo',
        animateClass: 'animate__hinge'
    },
];
// Animation Button & It's Content
animationBtnStyles.forEach((e) => {
    // Creating Button Inside Animation button Wrap
    const animateBtn = document.createElement('button');
    // Add Classes in Text changes Buttons
    animateBtn.classList = `btn ${e.btnClass}`;
    // Add Contents in Text changes Buttons
    animateBtn.innerText = e.btnName;
    // button DOM Show
    animationBtnWrap.appendChild(animateBtn);

    // Add animatin classes events
    animateBtn.addEventListener('click', (el) => {
        ovrlaytxt.classList = `${e.animateClass} overlay-text`;
        activeClass(el, 'animation-btn-wrap');
    });
});

// Button Active Class Function
function activeClass(el, parentClass) {
    const activeClass = document.querySelector(`.${parentClass} .btn.active`);
    if(activeClass) {
        activeClass.classList.remove('active');
    }
    el.target.classList.add('active');
};
