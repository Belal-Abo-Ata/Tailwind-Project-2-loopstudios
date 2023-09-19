/* ======================== Variables & DOM Elements ======================== */

const burgerIcon = document.querySelector(`[data-burger-icon]`);
const closeIcon = document.querySelector(`[data-close-icon]`);
const navMobile = document.querySelector(`[data-nav-mobile]`);

/* -------------------------------------------------------------------------- */

/* ============================= Event Listeners ============================ */

burgerIcon.addEventListener(`click`, openNav);
closeIcon.addEventListener(`click`, closeNav);

/* -------------------------------------------------------------------------- */

/* ================================ Functions =============================== */

function openNav() {
  burgerIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden');
  navMobile.classList.remove('-translate-y-[1000px]');
}

function closeNav() {
  burgerIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  navMobile.classList.add('-translate-y-[1000px]');
}

/* -------------------------------------------------------------------------- */
