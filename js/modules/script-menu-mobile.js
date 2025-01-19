import outsideClick from "./script-out-side-click.js";

export default function initMenuMobile() {
  const menuBtn = document.querySelector("[data-menu='botao']");
  const menuList = document.querySelector("[data-menu='list']");
  const events = ["click", "touchstart"];
  function abrirMenu() {
    menuList.classList.add("ativo");
    menuBtn.classList.add("ativo");
    outsideClick(menuList, events, () => {
      menuList.classList.remove("ativo");
      menuBtn.classList.remove("ativo");
    });
  }
  if (menuBtn) {
    events.forEach((evento) => menuBtn.addEventListener(evento, abrirMenu));
  }
}
