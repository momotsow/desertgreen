// Show Modal
const openModalButton = document.getElementById("farmer");
const openButtonTrader = document.getElementById("trader");
const modalWindowOverlay = document.getElementById("modal-overlay");
const modalWindowOverlayTrader = document.getElementById("modal-overlay2");

const showModalWindow = () => {
  modalWindowOverlay.style.display = 'flex';
}
const showModalWindowtrader = () => {
    modalWindowOverlayTrader.style.display = 'flex';
}
openModalButton.addEventListener("click", showModalWindow);
openButtonTrader.addEventListener("click", showModalWindowtrader);

// Hide Modal
const closeModalButton = document.getElementById("close-modal");
const closeModalButtonTrader = document.getElementById("close-modal2");

const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none';
}

const hideModalWindowTrader = () => {
    modalWindowOverlayTrader.style.display = 'none';
}

closeModalButton.addEventListener("click", hideModalWindow);
closeModalButtonTrader.addEventListener("click", hideModalWindowTrader);


// Hide On Blur

const hideModalWindowOnBlur = (e) => {

    if(e.target === e.currentTarget) {
      console.log(e.target === e.currentTarget)
        hideModalWindow();
    }
}

modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur)
