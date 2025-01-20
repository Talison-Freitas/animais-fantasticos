// Cria um accordionlist  na  section FAQ.
export default class Accordion {
  constructor(list) {
    this.faqDt = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }
  toggleDt(dt) {
    dt.classList.toggle(this.activeClass);
    dt.nextElementSibling.classList.toggle(this.activeClass);
  }
  addAccordionEvent() {
    this.faqDt.forEach((dt) => {
      dt.addEventListener("click", () => {
        this.toggleDt(dt);
      });
    });
  }
  init() {
    if (this.faqDt.length) {
      this.addAccordionEvent();
      this.toggleDt(this.faqDt[0]);
    }
  }
}
