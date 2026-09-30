import '@/scss/main.scss'

import $ from 'jquery'
window.$ = $
window.jQuery = $

import {Slider} from "@/js/components/Slider.js";
import {AccordionContainer} from "@/js/components/AccordionContainer.js";


$(function() {
  Slider()
  AccordionContainer()
})