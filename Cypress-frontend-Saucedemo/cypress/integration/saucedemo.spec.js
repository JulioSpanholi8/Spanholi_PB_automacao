/// <reference types="cypress"/>

describe('Testes front end - Site Swag Labs',() => {
    beforeEach(() => {
        cy.visit('/')
    })

    //  Login
    describe("Testes para Login", () => {    
        it("Deve realizar login com sucesso utilizando dados de usuário padrão", ()=>{
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce').type('{enter}')        //utilizando a tecla - ENTER
            cy.url().should('contain', '/inventory')
        })
        it("Deve realizar login com falha utilizando dados de usuário bloqueado", ()=>{
            cy.get('#user-name').type('locked_out_user')
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click()                                 //utilizando - Click
            cy.get('[data-test=login-button]')
            cy.get('[data-test=error]')                         
        })
    })

    /**********************************************************************************************/

    //  Carrinho
    describe("Testes item Carrinho", () => {
        it('Deve entrar no carrinho', () => {
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce').type('{enter}')       
            cy.get('.shopping_cart_link').click()
        })
        it('Deve adicionar itens ao carrinho', () => {
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce').type('{enter}')       
            cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
            cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click()
            cy.get('.shopping_cart_link').click()
        })
    })

        /**********************************************************************************************/

    //  Menu
    describe("Testes Menu", () => {
        it('Deve acessar o menu', () => {
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce').type('{enter}')       
            cy.get('#react-burger-menu-btn').click() 
        })
    })
}) 