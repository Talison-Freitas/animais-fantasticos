// Cria uma animação baseada no scroll do usuário pelo site.
export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anima='scroll']");
  const windowMetade = window.innerHeight * 0.4;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      const sectionVisible = sectionTop - windowMetade < 0;
      if (sectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
