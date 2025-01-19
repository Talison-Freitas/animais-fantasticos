// Faz com que o texto se "adapte" a imagem baseado no click sobre elas.
export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    tabContent[0].classList.add(tabContent[0].dataset.anima);

    tabMenu.forEach((section, index) => {
      section.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
