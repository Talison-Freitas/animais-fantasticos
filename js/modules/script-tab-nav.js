// Faz com que o texto se "adapte" a imagem baseado no click sobre elas.
export default class TabNav {
  constructor(imagem, texto) {
    this.tabMenu = document.querySelectorAll(imagem);
    this.tabContent = document.querySelectorAll(texto);
    this.activeClass = "ativo";
  }
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anima;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }
  addTabEvent() {
    this.tabMenu.forEach((section, index) => {
      section.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }
  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.addTabEvent();
      this.activeTab(0);
    }
  }
}

