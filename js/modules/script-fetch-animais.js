import AnimaNumeros from "./script-anima-numeros.js";

export default class FetchAnimais {
  constructor(numerosGrid, element, elementClass, url) {
    this.numerosGrid = document.querySelector(numerosGrid);
    this.element = element;
    this.elementClass = elementClass;
    this.url = url;
  }
  async fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      animaisJson.forEach((animal) => {
        const divAnimal = this.createAnimal(animal);
        this.numerosGrid.appendChild(divAnimal);
      });
      this.animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      this.animaNumeros.init();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  createAnimal(animal) {
    const div = document.createElement(this.element);
    div.classList.add(this.elementClass);
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }
  init() {
    this.fetchAnimais(this.url);
    return this;
  }
}
