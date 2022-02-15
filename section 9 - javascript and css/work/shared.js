const backdrop = document.querySelector('.backdrop');
const selectPlanButton = document.querySelectorAll('.plan .button');
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector('.modal .modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

selectPlanButton.forEach(x => x.addEventListener('click', () => toggleModal()));

backdrop.addEventListener('click', () => {
    backdrop.style.display = "none";
    mobileNav.style.display = "none";
    modal.style.display = "none";
    
});
modalCloseBtn.addEventListener('click', () => toggleModal());

const toggleModal = () => {
    modal.style.display = modal.style.display == "block" ? "none" : "block";
    backdrop.style.display = backdrop.style.display == "block" ? "none" : "block";
};

toggleButton.addEventListener('click', () => {
    mobileNav.style.display = "block";
    backdrop.style.display = "block";
});