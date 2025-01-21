// Faz com que o texto se "adapte" a imagem baseado no scroll da lista de imagens.
export default class ScrollNav {
  constructor(tabContent, menuLista) {
    this.tabContent = document.querySelectorAll(tabContent);
    this.menuLista = document.querySelector(menuLista);
  }
  activeTab(index) {
    this.tabContent.forEach((itemMenu) => {
      itemMenu.classList.remove("ativo");
      itemMenu.classList.remove(itemMenu.dataset.anima);
    });
    this.tabContent[index].classList.add("ativo");
    this.tabContent[index].classList.add(this.tabContent[index].dataset.anima);
  }
  addNavScrollEvent() {
    let lastIndex = -1;
    this.menuLista.addEventListener("scroll", () => {
      let newIndex;
      if (this.menuLista.scrollTop <= 300) {
        newIndex = 0;
      } else if (this.menuLista.scrollTop <= 650) {
        newIndex = 1;
      } else if (this.menuLista.scrollTop <= 1050) {
        newIndex = 2;
      } else if (this.menuLista.scrollTop <= 1450) {
        newIndex = 3;
      } else if (this.menuLista.scrollTop <= 1850) {
        newIndex = 4;
      } else {
        newIndex = 5;
      }
      if (newIndex !== lastIndex) {
        this.activeTab(newIndex);
        lastIndex = newIndex;
      }
    });
    const telaMedia = window.matchMedia("(max-width: 700px)");
    if (telaMedia) {
      if (telaMedia.matches) {
        let lastIndex = -1;
        this.menuLista.addEventListener("scroll", () => {
          let newIndex;
          if (this.menuLista.scrollTop <= 200) {
            newIndex = 0;
          } else if (this.menuLista.scrollTop <= 450) {
            newIndex = 1;
          } else if (this.menuLista.scrollTop <= 700) {
            newIndex = 2;
          } else if (this.menuLista.scrollTop <= 950) {
            newIndex = 3;
          } else if (this.menuLista.scrollTop <= 1200) {
            newIndex = 4;
          } else {
            newIndex = 5;
          }
          if (newIndex !== lastIndex) {
            this.activeTab(newIndex);
            lastIndex = newIndex;
          }
        });
      }
    }
    // Cria a responsividade para o novo scroll da lista de imagens, saindo de scrollY para ScrollX.
    const telaPequena = window.matchMedia("(max-width: 500px)");
    if (telaPequena) {
      if (telaPequena.matches) {
        let lastIndex = -1;
        this.menuLista.addEventListener("scroll", () => {
          let newIndex;
          if (this.menuLista.scrollLeft <= 200) {
            newIndex = 0;
          } else if (this.menuLista.scrollLeft <= 500) {
            newIndex = 1;
          } else if (this.menuLista.scrollLeft <= 800) {
            newIndex = 2;
          } else if (this.menuLista.scrollLeft <= 1100) {
            newIndex = 3;
          } else if (this.menuLista.scrollLeft <= 1400) {
            newIndex = 4;
          } else {
            newIndex = 5;
          }
          if (newIndex !== lastIndex) {
            this.activeTab(newIndex);
            lastIndex = newIndex;
          }
        });
      }
    }
  }
  init() {
    if (this.menuLista && this.tabContent) {
      this.addNavScrollEvent();
    }
  }
}
