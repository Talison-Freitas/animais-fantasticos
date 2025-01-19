// Cria um accordionlist  na  section FAQ.
export default function initAccordion() {
  const faqDt = document.querySelectorAll("[data-anima='accordion'] dt");
  if (faqDt.length) {
    faqDt[0].classList.toggle("ativo");
    faqDt[0].nextElementSibling.classList.toggle("ativo");
    faqDt.forEach((dt) => {
      function activeDt() {
        this.classList.toggle("ativo");
        this.nextElementSibling.classList.toggle("ativo");
      }
      dt.addEventListener("click", activeDt);
    });
  }
}
