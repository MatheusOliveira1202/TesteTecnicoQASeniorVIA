Feature: Busca

    Background: que estou na pagina da home
        Given que estou na pagina da home

    Scenario Outline: Busca por SKU
        When digitar um número de "<SKU>" na barra de busca
        And clicar na lupa de pesquisa 
        Then devo ser redirecionado para uma página contendo apenas o "<SKU>" buscado com o "<Nome>" correto

        Examples:
            | SKU      | Nome                               |
            | 55058313 | Apple iPhone 14 128GB - Meia-noite |

    
    Scenario Outline: Busca por Texto
        When digitar um "<Texto>" na barra de busca
        And clicar na lupa de pesquisa
        Then devo ser redirecionado para uma página contendo produtos baseados no texto que foi buscado

        Examples:
            | Texto      |
            | geladeira  |
