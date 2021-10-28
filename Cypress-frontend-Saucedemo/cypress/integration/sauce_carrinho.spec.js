/// <reference types="cypress"/>

import SauceCarrinho from '../pages/sauce_carrinho.page'
import SauceLogin from '../pages/sauce_login.page'

describe('Testes carrinho de compras',() => {
    beforeEach(() => {
        SauceCarrinho.acessarSauceDemo()
        SauceLogin.logar('standard_user')
    })
    it('Deve adicionar itens e validar funcionalidades do carrinho', () => {
        SauceCarrinho.adicionarItens()
    })
}) 