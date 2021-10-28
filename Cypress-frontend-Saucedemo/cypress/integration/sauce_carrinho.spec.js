/// <reference types="cypress"/>

import SauceLogin from '../pages/sauce_login.page'
import SauceCarrinho from '../pages/sauce_carrinho.page'

describe('Testes carrinho de compras',() => {
    beforeEach(() => {
        SauceCarrinho.acessarSauceDemo()
        SauceLogin.logar('standard_user')
    })
    it('Deve adicionar itens ao carrinho', () => {
        SauceCarrinho.adicionarItens()
    })
    it('Deve adicionar item e remove-lo do carrinho', () => {
        SauceCarrinho.removerItem()
    })
    it('Deve verificar item adicionado e elementos do carrinho', () => {
        SauceCarrinho.verificarCarinho()
    })
}) 