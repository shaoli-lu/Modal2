
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const closeClick = document.getElementById('main')

openModal();


closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      
        closeModal()
    })
});

closeClick.click(click => {
    click.addEventListener('click', () => {
        closeModal();
    })
})

function openModal() {
    modal.classList.add('active')
    overlay.classList.add('active')
};

function closeModal() {
    
    modal.classList.remove('active')
    overlay.classList.remove('active')
};