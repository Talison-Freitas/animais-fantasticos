import ScrollSuave from "./modules/script-scroll-suave.js";
import AnimaScroll from "./modules/script-anima-scroll.js";
import Accordion from "./modules/script-accordion.js";
import ScrollNav from "./modules/script-nav-scroll.js";
import TabNav from "./modules/script-tab-nav.js";
import Modal from "./modules/script-animacao-modal.js";
import Tooltip from "./modules/script-tooltip.js";
import DropdownMenu from "./modules/script-dropdown-menu.js";
import MenuMobile from "./modules/script-menu-mobile.js";
import initFuncionamento from "./modules/script-funcionamento.js";
import FetchAnimais from "./modules/script-fetch-animais.js";
import FetchBitcoin from "./modules/script-fetch-bitcoin.js";

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

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const fetchAnimais = new FetchAnimais(".numeros-grid", "div", "numero-animal", "./animaisapi.json");
fetchAnimais.init();

const fetchBitcoin = new FetchBitcoin(".btc-preco", "https://blockchain.info/ticker");
fetchBitcoin.init();

const animaScroll = new AnimaScroll("[data-anima='scroll']");
animaScroll.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu='botao']", "[data-menu='list']");
menuMobile.init();

initFuncionamento();
