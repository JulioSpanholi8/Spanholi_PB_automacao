import Base from './_base.page'
import { MENU } from './components/menu.elements.js'

export default class SauceMenu extends Base {
    static acessarSauceDemo(){
        cy.visit('/')
    }
    static acessarMenu(){
        super.clickOnElement(MENU.MENU_PG)
        super.getElement(MENU.MENU_LIST)
    }
    static acessarItens(){
        super.clickOnElement(MENU.MENU_PG)
        super.clickOnElement(MENU.MENU_ITENS)
        super.validarUrl(MENU.URL_ITENS)
    }
    static menuSobre(){
        super.clickOnElement(MENU.MENU_PG)
        super.clickOnElement(MENU.MENU_SOBRE)
        super.validarUrl(MENU.URL_SOBRE)
    }
    static menuSair(){
        super.clickOnElement(MENU.MENU_PG)
        super.clickOnElement(MENU.MENU_SAIR)
        super.validarUrl(MENU.URL_SAIR)
    }
    static menuReset(){
        super.clickOnElement(MENU.MENU_PG)
        super.clickOnElement(MENU.MENU_RESET)
    }
}