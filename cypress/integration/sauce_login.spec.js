/// <reference types="cypress"/>

import SauceLogin from '../pages/sauce_login.page'

describe('Testes de Login',() => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Deve realizar teste nos elementos presentes na tela de login',() => {
        SauceLogin.elementos()
    })  
    it("Deve realizar login com sucesso utilizando dados de usuário padrão", ()=>{
       SauceLogin.logar('standard_user')
    })
    it("Deve realizar login com falha utilizando dados de usuário bloqueado", ()=>{
       SauceLogin.logarBloqueado('locked_out_user')  
    })
    it("Deve realizar teste de login com usuario inexistente", ()=>{
        SauceLogin.logarInexistente('usuario_inexistente')  
     })
})