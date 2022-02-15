const backdrop = document.querySelector('.backdrop');
const selectPlanButton = document.querySelectorAll('.plan .button');
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector('.modal .modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButton.forEach(x => x.addEventListener('click', () => {
    modal.classList.add("open");
    backdrop.classList.add("open");
}));

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    closeModal();
});
modalCloseBtn.addEventListener('click', () => closeModal());

const closeModal = () => {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
};


toggleButton.addEventListener('click', () => {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});