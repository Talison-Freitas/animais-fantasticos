export default class Modal {
  constructor(container, botaoAbrir, botaoFechar) {
    this.modalContainer = document.querySelector(container);
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
  }
  toggleModal(event) {
    event.preventDefault();
    this.modalContainer.classList.toggle("ativo");
  }
  cliqueExternoModal(event) {
    if (event.target === this.modalContainer)
      this.modalContainer.classList.remove("ativo");
  }
  addEventsModal() {
    if (this.modalContainer && this.botaoAbrir && this.botaoFechar) {
      this.modalContainer.addEventListener("click", (event) => {
        this.cliqueExternoModal(event);
      });
      this.botaoFechar.addEventListener("click", (event) => {
        this.toggleModal(event);
      });
      this.botaoAbrir.addEventListener("click", (event) => {
        this.toggleModal(event);
      });
    }
  }
  init() {
    this.addEventsModal();
  }
}
