import outsideClick from "./script-out-side-click.js";

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  dropdownMenus.forEach((menu) => {
    ["click", "touchstart"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }
}
