import debounce from "./script-debounce";
// Cria uma animação baseada no scroll do usuário pelo site.
export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.65;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.scrollY > section.offset) {
        section.element.classList.add("ativo");
      } else if (section.element.classList.contains("ativo")) {
        section.element.classList.remove("ativo");
      }
    });
  }
  addEventScroll() {
    window.addEventListener("scroll", this.checkDistance);
  }
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      this.addEventScroll();
    }
    return this;
  }
}
