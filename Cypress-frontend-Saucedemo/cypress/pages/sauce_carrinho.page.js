import Base from './_base.page'
import { CARRINHO } from './components/carrinho.elements'

export default class SauceCarrinho extends Base {
    static acessarSauceDemo(){
        cy.visit('/')
    }
    static adicionarItens(){
        super.getElement(CARRINHO.LIST_PRODUTOS)
        super.clickOnElement(CARRINHO.ADD_PRODUTOCAR)
        super.clickOnElement(CARRINHO.ADD_PRODUTOCAR_2)
    }
    static removerItem(){
        super.clickOnElement(CARRINHO.ADD_PRODUTOCAR)
        super.clickOnElement(CARRINHO.NUM_CAR)
        super.verifyIfElementExists(CARRINHO.REMOVE_ITEMCAR)
        super.clickOnElement(CARRINHO.REMOVE_ITEMCAR)
    }
    static verificarCarinho(){
        super.clickOnElement(CARRINHO.ADD_PRODUTOCAR)
        super.clickOnElement(CARRINHO.NUM_CAR)
        super.verifyIfElementExists(CARRINHO.DESCRICAO_ITEM)
        super.verifyIfElementExists(CARRINHO.VALOR_ITEM)
    }
}