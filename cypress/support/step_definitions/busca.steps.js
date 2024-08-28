import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import buscaPage from "../pages/buscaPage"

Given("que estou na pagina da home", () => {
    buscaPage.carregarPagina()
})

When("digitar um número de {string} na barra de busca", (SKU) => {
    buscaPage.digitarSKUParaBusca(SKU)
})

Then("clicar na lupa de pesquisa", () => {
    buscaPage.realizarBusca()
    cy.wait(2000)
})

Then("devo ser redirecionado para uma página contendo apenas o {string} buscado com o {string} correto", (SKU, Nome) => {
    buscaPage.verificarNumeroDeProdutosNoResultadoDaBusca();
    buscaPage.verificarNomeDoProduto(SKU, Nome);
})

When("digitar um {string} na barra de busca", (Texto) => {
    buscaPage.digitarTextoParaBusca(Texto)
})

Then("devo ser redirecionado para uma página contendo produtos baseados no texto que foi buscado", () => {
    buscaPage.VerificarExistenciaProdutosResultadoBusca();
    //aqui gostaria de fazer uma função que avaliasse os títulos dos primeiros dez ou vinte produtos
    //e comparasse com o texto que foi pesquisado. Se fossem encontrados pelo menos de 2 a 5 produtos com
    //a palavra chave buscada, daria um retorno positivo para a frase "produtos baseados no texto buscado".
    //
    //Entretanto, ao fazer os testes manuais, verifiquei que dependendo do que é pesquisado, os resultados
    //são completamente diferentes. Por exemplo, ao pesquisar por "Ge$%la@#&dEI()ra"(que é geladeira, 
    //só que com caracteres especiais) só aparecem alguns intrumentos musicais. Então levar em consideração
    //o texto que foi usado para a busca, pra validar os produtos que vem no resultado pode gerar muitos
    //falso positivos, o que faria com que não tivéssemos assertividade para uma automação.
})