export default function animacaoModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }
  function cliqueExternoModal(event) {
    if (event.target === modalContainer)
      modalContainer.classList.remove("ativo");
  }
  if (modalContainer && botaoAbrir && botaoFechar) {
    modalContainer.addEventListener("click", cliqueExternoModal);
    botaoFechar.addEventListener("click", toggleModal);
    botaoAbrir.addEventListener("click", toggleModal);
  }
}
