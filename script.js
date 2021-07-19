
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const closeClick = document.getElementById('main')
const msgBox = document.getElementById('announcement-yellow')
// const msg = document.getElementsByClassName('msg')
const isIE = () => {
    const ua = navigator.userAgent; return ua.indexOf('MSIE') >-1 || ua.indexOf('Trident') > -1;
}

if (isIE != true) 
    hideMsg();


if (isIE === true)
openModal();



closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      
        closeModal()
    })
});


$(document).click(function (e) {
    if ($(e.target).is('#overlay')) {
        closeModal();
    }

});

function openModal() {
    modal.classList.add('active')
    overlay.classList.add('active')
};

function closeModal() {
    
    modal.classList.remove('active')
    overlay.classList.remove('active')
};

function hideMsg() {
    msgBox.style.display = "none";
    msgBox.innerHTML='';
    // while (msg.firstChild) msg.removeChild(msg.firstChild);
}