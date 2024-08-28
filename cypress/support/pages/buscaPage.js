/// <reference types="cypress"/>

const buscaElements = require('../elements/buscaElements').buscaElements

class BuscaPage{

    carregarPagina(){
        cy.visit('/')
    }

    digitarSKUParaBusca(SKU){
        cy.get(buscaElements.CAIXA_BUSCA).click().type(SKU);
    }

    realizarBusca(){
        cy.get(buscaElements.LUPA_DE_BUSCA).click();
    }

    verificarNumeroDeProdutosNoResultadoDaBusca(){
        cy.get(buscaElements.LISTA_PRODUTOS_RESULTADO_BUSCA).its('length').should('eq', 1)
    }

    verificarNomeDoProduto(SKU, nome){
        cy.get(buscaElements.LISTA_PRODUTOS_RESULTADO_BUSCA).each(($item) => {
            var nomeProduto = $item.find(buscaElements.NOME_PRODUTO).eq(0).text();
            expect(nomeProduto).to.be.equals(nome);
        })
    }

    digitarTextoParaBusca(texto){
        cy.get(buscaElements.CAIXA_BUSCA).click().type(texto);
    }

    VerificarExistenciaProdutosResultadoBusca(){
        cy.get(buscaElements.LISTA_PRODUTOS_RESULTADO_BUSCA).its('length').should('be.gt', 0)
    }
}

export default new BuscaPage();