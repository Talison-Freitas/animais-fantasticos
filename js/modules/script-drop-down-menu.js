import outsideClick from "./script-out-side-click.js";

export default class DropdownMenu {
  constructor(menu, events) {
    this.dropdownMenus = document.querySelectorAll(menu);
    this.handleClick = this.handleClick.bind(this);
    this.events = events;
    this.activeClass = "ativo";
  }
  addDropdownEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }
  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownEvent();
    }
  }
}
