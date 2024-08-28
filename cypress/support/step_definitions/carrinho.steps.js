import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import carrinhoPage from "../pages/carrinhoPage"
import buscaPage from "../pages/buscaPage"
import { carrinhoElements } from "../elements/carrinhoElements"

Given("que estou na home", () => {
    carrinhoPage.carregarPagina()
})

Given("que estou logado com o {string} e a {string}", (CPF, Senha) => {
    carrinhoPage.carregarPagina()
    carrinhoPage.login(CPF, Senha)
})

Given("que tenho um {string} no carrinho", (SKU) => {
    buscaPage.digitarSKUParaBusca(SKU)
    buscaPage.realizarBusca()
    carrinhoPage.entrarNaPDPDeUmSKUPelaBusca()
    carrinhoPage.adicionarAoCarrinho()
    cy.get(carrinhoElements.LOGO_SITE).click()
})

When("entrar na página de um {string}", (SKU) => {
    buscaPage.digitarSKUParaBusca(SKU)
    buscaPage.realizarBusca()
    carrinhoPage.entrarNaPDPDeUmSKUPelaBusca()
})

Then("clicar em 'Adicionar ao carrinho'", () => {
    carrinhoPage.adicionarAoCarrinho()
    cy.wait(3000)
})

Then("o produto selecionado deve constar no carrinho com o {string}", (Nome) => {
    carrinhoPage.verificarSeProdutoEstaNoCarrinho(Nome)
})

Then("clicar em 'Retira rápido'", () => {
    carrinhoPage.clicarEmRetiraRapido()
})

Then("digitar um {string} válido", (CEP) => {
    carrinhoPage.inserirCepNoRetiraRapido(CEP)
    cy.wait(2000)
})

Then("clicar em 'Retirar nessa loja' em alguma das opções de loja", () => {
    carrinhoPage.selecionarLojaParaRetirar()
    cy.wait(2000)
})

When("entrar no carrinho", () => {
    carrinhoPage.entrarCarrinho()
})

Then("clicar em 'remover' no produto que foi adicionado", () => {
    carrinhoPage.removerDoCarrinho()
    cy.wait(3000)
})

Then("o carrinho deve estar vazio", () => {
    cy.wait(2000)
    carrinhoPage.verificarCarrinhoVazio()
})

Then("que tenho um {string} no meu carrinho", (SKU) => {
    buscaPage.digitarSKUParaBusca(SKU)
    buscaPage.realizarBusca()
    carrinhoPage.entrarNaPDPDeUmSKUPelaBusca()
    carrinhoPage.adicionarAoCarrinho()
    cy.get(carrinhoElements.LOGO_SITE).click()
})

Then("clicar em 'Continuar a compra'", () => {
    carrinhoPage.continuarCompra()
})

Then("selecionar o endereço e clicar em 'ir para pagamento'", () => {
    carrinhoPage.irParaPagamento()
})

Then("selecionar o método de pagamento Pix", () => {
    carrinhoPage.selecionarPagamentoPix()
})

Then("clicar em 'Finalizar Compra'", () => {
    carrinhoPage.finalizarCompra()
})

Then("o pedido tem que estar finalizado", () => {
    carrinhoPage.verificarCompraFinalizada()
})