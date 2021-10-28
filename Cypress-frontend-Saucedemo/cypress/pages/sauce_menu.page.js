import Base from './_base.page'

const MENU          = '#react-burger-menu-btn'
const MENU_LIST     = '.bm-item-list'
const MENU_ITENS    = '#inventory_sidebar_link'
const MENU_SOBRE    = '#about_sidebar_link'
const MENU_SAIR     = '#logout_sidebar_link'
const MENU_RESET    = '#reset_sidebar_link' 
const URL_ITENS     = '/inventory.html'   
const URL_SOBRE     = '/saucelab' 
const URL_SAIR      = 'saucedemo'

export default class SauceMenu extends Base {
    static acessarSauceDemo(){
        cy.visit('/')
    }
    static acessarMenu(){
        super.clickOnElement(MENU)
        super.getElement(MENU_LIST)
    }
    static acessarItens(){
        super.clickOnElement(MENU)
        super.clickOnElement(MENU_ITENS)
        super.validarUrl(URL_ITENS)
    }
    static menuSobre(){
        super.clickOnElement(MENU)
        super.clickOnElement(MENU_SOBRE)
        super.validarUrl(URL_SOBRE)
    }
    static menuSair(){
        super.clickOnElement(MENU)
        super.clickOnElement(MENU_SAIR)
        super.validarUrl(URL_SAIR)
    }
    static menuReset(){
        super.clickOnElement(MENU)
        super.clickOnElement(MENU_RESET)
    }
}