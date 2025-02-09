import { greeting } from "./page1.js";
import "./styles.css";
import { load4_H_Livestock_Sale } from "./page1.js";
import { loadUs } from "./contact.js";
import { loadCost} from './cost.js'
import { loadOptions } from "./options.js";
import { loadWorks } from "./works.js";

console.log(greeting);
const sale = document.querySelector('.Sale')
sale.addEventListener('click', () => {
    load4_H_Livestock_Sale()
})

const contact = document.querySelector('.contact')
contact.addEventListener('click', () => {
    loadUs()
})

const cost = document.querySelector('.cost')
cost.addEventListener('click', () => {
    loadCost()
})

const options = document.querySelector('.options')
options.addEventListener('click', () => {
    loadOptions()
})

const works = document.querySelector('.howWorks')
works.addEventListener('click', () => {
    loadWorks()
})

