/// <reference types="cypress"/>

import SauceLogin from '../pages/sauce_login.page'
import SauceMenu from '../pages/sauce_menu.page'

describe('Testes no Menu',() => {
    beforeEach(() => {
        SauceMenu.acessarSauceDemo()
        SauceLogin.logar('standard_user')
    })
    it('Deve acessar o Menu e verificar lista de itens', () => {
        SauceMenu.acessarMenu()
    })
    it('Deve acessar o Menu e "All Items" ao clicar no botão', () => {
        SauceMenu.acessarItens()
    })
    it('Deve acessar o Menu e "About" ao clicar no botão', () => {
        SauceMenu.menuSobre()
    })
    it('Deve acessar o Menu e "Logout" ao clicar no botão', () => {
        SauceMenu.menuSair()
    })
    it('Deve acessar o Menu e "Reset App State" ao clicar no botão', () => {
        SauceMenu.menuReset()
    })
})