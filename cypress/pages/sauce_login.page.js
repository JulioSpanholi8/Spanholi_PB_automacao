import Base from './_base.page'
import { LOGIN } from './components/login.elements'

export default class SauceLogin extends Base {
    static acessarSauceDemo(){
        cy.visit('/')
    }
    static elementos(){
        super.verifyIfElementExists(LOGIN.IMG_LOGO)
        super.verifyIfElementExists(LOGIN.IMG_ROBO)
        super.getElement(LOGIN.LG_WRAPPERS)
        super.getElementText(LOGIN.LG_CONTAINER)
        super.getElementText(LOGIN.LG_CREDENTIAL)
        super.getElementText(LOGIN.LG_PASSWORD)
    }
    static logar(usuario){
        super.typeValue(LOGIN.INP_USERNAME, usuario)
        super.typeValue(LOGIN.INP_PASSWORD, 'secret_sauce')
        super.verifyIfElementExists(LOGIN.BTN_LOGIN)
        super.clickOnElement(LOGIN.BTN_LOGIN)
        super.validarUrl(LOGIN.URL)
    }
    static logarBloqueado(usuario){
        super.typeValue(LOGIN.INP_USERNAME, usuario)
        super.typeValue(LOGIN.INP_PASSWORD, 'secret_sauce')
        super.clickOnElement(LOGIN.BTN_LOGIN)
        super.validateElementText(LOGIN.TXT_ERROR, "Epic sadface: Sorry, this user has been locked out.")
    }
    static logarInexistente(usuario){
        super.typeValue(LOGIN.INP_USERNAME, usuario)
        super.typeValue(LOGIN.INP_PASSWORD, 'secret_sauce')
        super.clickOnElement(LOGIN.BTN_LOGIN)
        super.validateElementText(LOGIN.TXT_ERROR, "Epic sadface: Username and password do not match any user in this service")
    }
}