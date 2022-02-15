const backdrop = document.querySelector('.backdrop');
const selectPlanButton = document.querySelectorAll('.plan .button');
const modal = document.querySelector(".modal");

selectPlanButton.forEach(x => x.addEventListener('click', () => toggleModal()));

backdrop.addEventListener('click', () => toggleModal());

const toggleModal = () => {
    modal.style.display = modal.style.display == "block" ? "none" : "block";
    backdrop.style.display = backdrop.style.display == "block" ? "none" : "block";
};