import ScrollSuave from './modules/script-scroll-suave.js';
import initAnimacaoScroll from './modules/script-scroll-animacao.js';
import Accordion from './modules/script-accordion.js';
import initScrollNav from './modules/script-nav-scroll.js';
import initTabNav from './modules/script-tab-nav.js';
import animacaoModal from './modules/script-animacao-modal.js';
import initTooltip from './modules/script-tooltip.js';
import initDropDownMenu from './modules/script-drop-down-menu.js';
import initMenuMobile from './modules/script-menu-mobile.js';
import initFuncionamento from './modules/script-funcionamento.js';
import initFetchAnimais from './modules/script-fetch-animais.js';
import initFetchBitcoin from './modules/script-fetch-bitcoin.js';

const scrollSuave = new ScrollSuave("[data-interface='menu'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-anima='accordion'] dt");
accordion.init();
initAnimacaoScroll();
initScrollNav();
initTabNav();
animacaoModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

// "[data-interface='menu'] a[href^='#']"
