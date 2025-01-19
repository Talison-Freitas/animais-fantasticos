// Faz com que o texto se "adapte" a imagem baseado no scroll da lista de imagens.
export default function initScrollNav() {
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const menuLista = document.querySelector("[data-tab='menu']");
  let lastIndex = -1;
  function activeTab(index) {
    tabContent.forEach((itemMenu) => {
      itemMenu.classList.remove("ativo");
      itemMenu.classList.remove(itemMenu.dataset.anima);
    });
    tabContent[index].classList.add("ativo");
    tabContent[index].classList.add(tabContent[index].dataset.anima);
  }
  if (menuLista && tabContent) {
    menuLista.addEventListener("scroll", () => {
      let newIndex;
      if (menuLista.scrollTop <= 300) {
        newIndex = 0;
      } else if (menuLista.scrollTop <= 650) {
        newIndex = 1;
      } else if (menuLista.scrollTop <= 1050) {
        newIndex = 2;
      } else if (menuLista.scrollTop <= 1450) {
        newIndex = 3;
      } else if (menuLista.scrollTop <= 1850) {
        newIndex = 4;
      } else {
        newIndex = 5;
      }
      if (newIndex !== lastIndex) {
        activeTab(newIndex);
        lastIndex = newIndex;
      }
    });
    const telaMedia = window.matchMedia("(max-width: 700px)");
    if (telaMedia) {
      if (telaMedia.matches) {
        let lastIndex = -1;
        menuLista.addEventListener("scroll", () => {
          let newIndex;
          if (menuLista.scrollTop <= 200) {
            newIndex = 0;
          } else if (menuLista.scrollTop <= 450) {
            newIndex = 1;
          } else if (menuLista.scrollTop <= 700) {
            newIndex = 2;
          } else if (menuLista.scrollTop <= 950) {
            newIndex = 3;
          } else if (menuLista.scrollTop <= 1200) {
            newIndex = 4;
          } else {
            newIndex = 5;
          }
          if (newIndex !== lastIndex) {
            activeTab(newIndex);
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
        menuLista.addEventListener("scroll", () => {
          let newIndex;
          if (menuLista.scrollLeft <= 200) {
            newIndex = 0;
          } else if (menuLista.scrollLeft <= 500) {
            newIndex = 1;
          } else if (menuLista.scrollLeft <= 800) {
            newIndex = 2;
          } else if (menuLista.scrollLeft <= 1100) {
            newIndex = 3;
          } else if (menuLista.scrollLeft <= 1400) {
            newIndex = 4;
          } else {
            newIndex = 5;
          }
          if (newIndex !== lastIndex) {
            activeTab(newIndex);
            lastIndex = newIndex;
          }
        });
      }
    }
  }
}
