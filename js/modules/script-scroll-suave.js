// Cria um scroll suave nos links internos do site
export default function initSmothScroll() {
  const linksInternos = document.querySelectorAll(
    "[data-interface='menu'] a[href^='#']"
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const sectionTop = section.offsetTop;
    window.scrollTo(0, sectionTop);
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
