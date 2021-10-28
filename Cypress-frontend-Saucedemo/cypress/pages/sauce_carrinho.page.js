import Base from './_base.page'

const LIST_PRODUTOS     =   '.inventory_list'
const ADD_PRODUTOCAR    =   '[data-test=add-to-cart-sauce-labs-backpack]'
const REMOVE_ITEMCAR    =   '#remove-sauce-labs-backpack' 
const ADD_PRODUTOCAR_2  =   '[data-test=add-to-cart-sauce-labs-bike-light]'
const NUM_CAR           =   '.shopping_cart_link'
const DESCRICAO_ITEM    =   '.inventory_item_name'
const VALOR_ITEM        =   '.inventory_item_price'

export default class SauceCarrinho extends Base {
    static acessarSauceDemo(){
        cy.visit('/')
    }
    static adicionarItens(){
        super.getElement(LIST_PRODUTOS)
        super.clickOnElement(ADD_PRODUTOCAR)
        super.clickOnElement(ADD_PRODUTOCAR_2)
        super.clickOnElement(NUM_CAR)
        super.getElement(DESCRICAO_ITEM)
        super.getElement(VALOR_ITEM)
        super.clickOnElement(REMOVE_ITEMCAR)
    }
}