/// <reference types="cypress"/>

const carrinhoElements = require('../elements/carrinhoElements').carrinhoElements
const buscaElements = require('../elements/buscaElements').buscaElements

class CarrinhoPage{

    carregarPagina(){
        cy.visit('/')
    }

    login(cpf, senha){
        cy.get(carrinhoElements.BOTAO_ENTRE_OU_CADASTRESE).click()
        cy.get(carrinhoElements.CAIXA_CPF).click().type(cpf)
        cy.get(carrinhoElements.BOTAO_CONTINUAR_LOGIN).click()
        cy.get(carrinhoElements.CAIXA_SENHA).click().type(senha)
        cy.get(carrinhoElements.BOTAO_COMPLETAR_LOGIN).click()
    }

    entrarNaPDPDeUmSKUPelaBusca(){
        cy.get(buscaElements.LISTA_PRODUTOS_RESULTADO_BUSCA).first().click()
    }

    adicionarAoCarrinho(){
        cy.get(carrinhoElements.BOTAO_COMPRAR).click()
        cy.get(carrinhoElements.BOTAO_AGORA_NAO_INTERMEDIARIA).click()
    }

    verificarSeProdutoEstaNoCarrinho(nome){
        cy.get("body").contains(nome)
    }

    clicarEmRetiraRapido(){
        cy.get(carrinhoElements.BOTAO_RETIRA_RAPIDO).click()
    }

    inserirCepNoRetiraRapido(CEP){
        cy.get(carrinhoElements.CAIXA_CEP_RETIRA_RAPIDO).type(CEP)
    }

    selecionarLojaParaRetirar(){
        cy.get(carrinhoElements.LISTA_LOJAS_PARA_RETIRADA).first().find(carrinhoElements.BOTAO_RETIRAR_NESSA_LOJA).click()
        cy.get(carrinhoElements.BOTAO_AGORA_NAO_INTERMEDIARIA).click()
    }

    entrarCarrinho(){
        cy.get(carrinhoElements.BOTAO_CARRINHO).click();
    }

    removerDoCarrinho(){
        cy.get(carrinhoElements.BOTAO_REMOVER_DO_CARRINHO).click();
    }

    verificarCarrinhoVazio(){
        cy.get(carrinhoElements.TEXTO_CARRINHO_VAZIO).then(($item) => {
            expect($item.eq(0).text().trim()).equal('Seu carrinho está vazio!'.trim())
        })
    }

    continuarCompra(){
        cy.get(carrinhoElements.BOTAO_CONTINUAR_COMPRA).click()
    }

    irParaPagamento(){
        cy.get(carrinhoElements.BOTAO_IR_PARA_PAGAMENTO).click()
    }

    selecionarPagamentoPix(){
        cy.get(carrinhoElements.CAIXA_PIX_PAGAMENTO).click()
    }

    finalizarCompra(){
        cy.get(carrinhoElements.BOTAO_FINALIZAR_COMPRA).click()
    }

    verificarCompraFinalizada(){
        cy.get('body').contains('Recebemos seu pedido, obrigado')
        expect(cy.get(carrinhoElements.ICONE_COMPRA_FINALIZADA)).to.not.be.null
    }
}

export default new CarrinhoPage();