import outsideClick from "./script-out-side-click.js";

export default class MenuMobile {
  constructor(menuBtn, menuList, events) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;
    this.abrirMenu = this.abrirMenu.bind(this);
  }
  abrirMenu(event) {
    event.preventDefault();
    this.menuList.classList.add("ativo");
    this.menuBtn.classList.add("ativo");
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove("ativo");
      this.menuBtn.classList.remove("ativo");
    });
  }
  addMobileMenuEvent() {
    this.events.forEach((evento) =>
      this.menuBtn.addEventListener(evento, this.abrirMenu)
    );
  }
  init() {
    if (this.menuBtn && this.menuList) {
      this.addMobileMenuEvent();
    }
  }
}
