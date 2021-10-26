/// <reference types="cypress"/>

describe('Testes da barra de navegação',() => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Deve acessar a área "Sobre Mim" ao clicar no botão',() => {
        cy.get(`[title='Sobre mim']`).click()
        cy.url().should('contain', '/sobre-mim')
    })

    it('Deve acessar a área "Serviços" ao clicar no botão',() => {
        cy.get(`[title='Serviços']`).click()
        cy.url().should('contain', '/servicos')
    })

    it('Deve acessar a área "Channel" ao clicar no botão',() => {
        cy.get(`[title='Channel']`).click()
        cy.url().should('contain', '/channel')
        cy.contains('cinza').scrollIntoView()
        cy.get('.medium-article-feed-layout-1').should('be.visible')
    })

    it('Deve acessar a área "Contato" ao clicar no botão',() => {
        cy.get(`[title='Contato']`).click()
        cy.url().should('contain', '/contato')
    })
})