export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function onMouseOver(event) {
    const tooltipBox = createTooltipBox(this);
    this.addEventListener("mouseleave", onMouseLeave);
    onMouseLeave.element = this;
    this.addEventListener("mousemove", onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseMove.tooltipBox = tooltipBox;
    onMouseMove.element = this;
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };
  const onMouseMove = {
    handleEvent(event) {
      (this.tooltipBox.style.top = event.pageY - 10 + "px"),
      (this.tooltipBox.style.left = event.pageX + 20 + "px");
    },
  };

  function createTooltipBox(element) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    document.body.appendChild(tooltip);
    tooltip.innerHTML = element.getAttribute("aria-label");
    return tooltip;
  }
  function removeTooltipBox(tooltip) {
    tooltip.remove();
  }
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", onMouseOver);
  });
}
