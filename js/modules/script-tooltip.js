export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseOver(event) {
    const tooltipBox = this.createTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }
  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY - -18 + "px";
    if (event.pageX + 230 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX + -196 + "px";
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
  }

  createTooltipBox(event) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    document.body.appendChild(tooltip);
    tooltip.innerHTML = event.getAttribute("aria-label");
    this.tooltipBox = tooltip;
  }
  removeTooltipBox(tooltip) {
    tooltip.remove();
  }
  addTooltipEvent() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", this.onMouseOver);
    });
  }
  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
      return this;
    }
  }
}
