import ScrollSuave from "./modules/script-scroll-suave.js";
import initAnimacaoScroll from "./modules/script-scroll-animacao.js";
import Accordion from "./modules/script-accordion.js";
import ScrollNav from "./modules/script-nav-scroll.js";
import TabNav from "./modules/script-tab-nav.js";
import Modal from "./modules/script-animacao-modal.js";
import initTooltip from "./modules/script-tooltip.js";
import initDropDownMenu from "./modules/script-drop-down-menu.js";
import initMenuMobile from "./modules/script-menu-mobile.js";
import initFuncionamento from "./modules/script-funcionamento.js";
import initFetchAnimais from "./modules/script-fetch-animais.js";
import initFetchBitcoin from "./modules/script-fetch-bitcoin.js";

const scrollSuave = new ScrollSuave("[data-interface='menu'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-anima='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="container"]',
  '[data-modal="abrir"]',
  '[data-modal="fechar"]'
);
modal.init();

const scrollNav = new ScrollNav("[data-tab='content'] section", "[data-tab='menu']");
scrollNav.init();
initAnimacaoScroll();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
