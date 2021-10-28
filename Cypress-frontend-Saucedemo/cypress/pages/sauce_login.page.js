import Base from './_base.page'

const URL           = '/inventory.html'
const INP_USERNAME  = '#user-name'
const INP_PASSWORD  = '#password'
const BTN_LOGIN     = '#login-button'
const TXT_ERROR     = '[data-test=error]'
const LG_WRAPPERS   = '.login_wrapper'
const IMG_LOGO      = '.login_logo'
const IMG_ROBO      = '.bot_column'
const LG_CONTAINER  = '#login_button_container'
const LG_CREDENTIAL = '#login_credentials'
const LG_PASSWORD   = '.login_password'

export default class SauceLogin extends Base {
    static acessarSauceDemo(){
        cy.visit('/')
    }
    static elementos(){
        super.getElement(IMG_LOGO)
        super.getElement(IMG_ROBO)
        super.getElement(LG_WRAPPERS)
        super.getElementText(LG_CONTAINER)
        super.getElementText(LG_CREDENTIAL)
        super.getElementText(LG_PASSWORD)
    }
    static logar(usuario){
        super.typeValue(INP_USERNAME, usuario)
        super.typeValue(INP_PASSWORD, 'secret_sauce')
        super.clickOnElement(BTN_LOGIN)
        super.validarUrl(URL)
    }
    static logarBloqueado(usuario){
        super.typeValue(INP_USERNAME, usuario)
        super.typeValue(INP_PASSWORD, 'secret_sauce')
        super.clickOnElement(BTN_LOGIN)
        super.validateElementText(TXT_ERROR, "Epic sadface: Sorry, this user has been locked out.")
    }
    static logarInexistente(usuario){
        super.typeValue(INP_USERNAME, usuario)
        super.typeValue(INP_PASSWORD, 'secret_sauce')
        super.clickOnElement(BTN_LOGIN)
        super.validateElementText(TXT_ERROR, "Epic sadface: Username and password do not match any user in this service")
    }
}