export default class AnimaNumeros {
  constructor(numeros, observe, observeClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observe);
    this.observeClass = observeClass;
    this.handleMutation = this.handleMutation.bind(this);
  }
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = total / 100;
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = Math.floor(start);
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observeTarget, { attributes: true });
  }
  handleMutation() {
    if (this.observeTarget.classList.contains(this.observeClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  init() {
    if (this.numeros.length && this.observeTarget) {
      this.addMutationObserver();
      return this;
    }
  }
}
