// const openModalBtn = document.querySelector(".btn");
// const closeModalBtn = document.querySelector(".close-btn");
// const backdrop = document.querySelector(".backdrop");
// const loginActionBtn = document.querySelector(".login-form");
// const regActionBtn = document.querySelector(".reg-form");
// const btnCreate = document.querySelector(".modal-btn-create");
// const loginForam = document.querySelector(".login-form_login");
// const regForm = document.querySelector(".login-form_reg");
// const btnHereReg = document.querySelector('button[data-action="reg"]');
// const btnHereLogin = document.querySelector('button[data-action="login"]');
// const btnAction = document.querySelector(".modal-btn_action");

// openModalBtn.addEventListener("click", openModal);
// closeModalBtn.addEventListener("click", closeModal);
// backdrop.addEventListener("click", onBackdropClick);
// loginActionBtn.addEventListener("submit", formSubmit);
// regActionBtn.addEventListener("submit", formSubmit);
// btnHereReg.addEventListener("click", createForm);
// btnHereLogin.addEventListener("click", createForm);

// function openModal() {
//   window.addEventListener("keydown", onEscKeyPress);
//   document.body.classList.add("show-modal");
// }

// function closeModal() {
//   window.removeEventListener("keydown", onEscKeyPress);
//   document.body.classList.remove("show-modal");
// }

// function onBackdropClick(e) {
//   if (e.currentTarget === e.target) {
//     closeModal();
//   }
// }

// function onEscKeyPress(e) {
//   if (e.code === "Escape") {
//     closeModal();
//   }
// }

// function formSubmit(e) {
//   e.preventDefault();
//   const {
//     elements: { email, password },
//   } = e.currentTarget;
//   if (email.value.trim() !== `` || password.value.trim() !== ``) {
//     console.log(`Email: ${email.value}, Password: ${password.value}`);
//     e.currentTarget.reset();
//     return closeModal();
//   }
// }

// function createForm() {
//   loginForam.classList.toggle("visually-hidden");
//   regForm.classList.toggle("visually-hidden");
// }
