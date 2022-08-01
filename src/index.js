

import * as module from './page-load.js'
module.load();

import {item} from './menu.js'

import {address} from './contact.js'



import './style.css'

let tabSwitchingModule = (function() {

    const home = document.querySelector(".home");
    home.addEventListener("click", module.load);

    
    const menu = document.querySelector(".menu");
    menu.addEventListener("click", item);

    const contact = document.querySelector(".contact");
    contact.addEventListener("click", address);

   

})();