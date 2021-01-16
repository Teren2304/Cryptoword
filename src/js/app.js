import $ from 'jquery'
import revertHeaderColorOnScroll from './components/revertHeaderColor'
import menu from './components/menu';
import dropdown from './components/dropdown'
import scrollAnimation from './components/scroll-observer'
import accordion from './components/accordion'
import numAnimationOnScroll from './components/num-animatio-on-scroll'
import anchorScroll from './components/anchor-scroll'
import slider from './components/brands-slider'
import mobileMenuAccordion from './components/mobile-menu-accordion'
import closeMobileMenuOnResize from "./helpers/closeMobileMenuOnResize";

revertHeaderColorOnScroll();
menu();
dropdown();
scrollAnimation();
accordion();
numAnimationOnScroll();
anchorScroll('a[href^=\\#]', $('.header').height() - 30);
mobileMenuAccordion();
closeMobileMenuOnResize();
slider();
