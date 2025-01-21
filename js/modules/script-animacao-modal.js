export default class Modal {
  constructor(container, botaoAbrir, botaoFechar) {
    this.modalContainer = document.querySelector(container);
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    // bind para fazer referência ao this da classe na função de callback
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueExternoModal = this.cliqueExternoModal.bind(this);
  }
  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal(event);
  }
  cliqueExternoModal(event) {
    if (event.target === this.modalContainer)
      this.modalContainer.classList.remove("ativo");
  }
  addModalEvents() {
    this.modalContainer.addEventListener("click", this.cliqueExternoModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
  }
  init() {
    if (this.modalContainer && this.botaoAbrir && this.botaoFechar) {
      this.addModalEvents();
      return this;
    }
  }
}
