Feature: Carrinho

    Background: que estou na home
        Given que estou na home

    Scenario Outline: Adicionar SKU no carrinho - Sem Login
        When entrar na página de um "<SKU>"
        And clicar em 'Adicionar ao carrinho'
        Then o produto selecionado deve constar no carrinho com o "<Nome>"

        Examples:
            | SKU      | Nome                             |
            | 55058313 |Apple iPhone 14 128GB - Meia-noite|
    
    Scenario Outline: Adicionar SKU no carrinho com retira rápido - Sem Login
        When entrar na página de um "<SKU>"
        And clicar em 'Retira rápido'
        And digitar um "<CEP>" válido
        And clicar em 'Retirar nessa loja' em alguma das opções de loja
        Then o produto selecionado deve constar no carrinho com o "<Nome>"

        Examples:
            | SKU      |      CEP       | Nome                                                                                                                                          |
            | 55054276 |    20730452    |Geladeira Consul Duplex CRM44AK Frost Free com Altura Flex, Função Turbo e Freezer Espaçoso 386 L - Inox|

    Scenario Outline: Adicionar SKU no carrinho - Com Login
        Given que estou logado com o "<CPF>" e a "<Senha>"
        When entrar na página de um "<SKU>"
        And clicar em 'Adicionar ao carrinho'
        Then o produto selecionado deve constar no carrinho com o "<Nome>"

        Examples:
            | SKU      | Nome                             | CPF            |    Senha       |
            | 55058313 |Apple iPhone 14 128GB - Meia-noite| 17498350530    |   a123456      |


    Scenario Outline: Adicionar SKU no carrinho com retira rápido - Com Login
        Given que estou logado com o "<CPF>" e a "<Senha>"
        When entrar na página de um "<SKU>"
        And clicar em 'Retira rápido'
        And digitar um "<CEP>" válido
        And clicar em 'Retirar nessa loja' em alguma das opções de loja
        Then o produto selecionado deve constar no carrinho com o "<Nome>"

        Examples:
            | SKU      |      CEP       | Nome                                                                                                   | CPF            |    Senha       |
            | 55054276 |    20730452    |Geladeira Consul Duplex CRM44AK Frost Free com Altura Flex, Função Turbo e Freezer Espaçoso 386 L - Inox| 17498350530    |   a123456      |


   Scenario Outline: Remover um SKU do carrinho - Sem Login
        Given que tenho um "<SKU>" no carrinho
        When entrar no carrinho
        And clicar em 'remover' no produto que foi adicionado
        Then o carrinho deve estar vazio

        Examples:
            | SKU      | Nome                             |
            | 55058313 |Apple iPhone 14 128GB - Meia-noite|
    
    Scenario Outline: Remover um SKU do carrinho - Com Login
        Given que estou logado com o "<CPF>" e a "<Senha>"
        And que tenho um "<SKU>" no meu carrinho
        When entrar no carrinho
        And clicar em 'remover' no produto que foi adicionado
        Then o carrinho deve estar vazio

        Examples:
            | SKU      | Nome                             | CPF            |    Senha       |
            | 55058313 |Apple iPhone 14 128GB - Meia-noite| 17498350530    |   a123456      |

   Scenario Outline: Fechar pedido - Pix
        Given que estou logado com o "<CPF>" e a "<Senha>"
        When entrar na página de um "<SKU>"
        And clicar em 'Adicionar ao carrinho'
        And clicar em 'Continuar a compra'
        And selecionar o endereço e clicar em 'ir para pagamento'
        And selecionar o método de pagamento Pix
        And clicar em 'Finalizar Compra'
        Then o pedido tem que estar finalizado

        Examples:
            | SKU      | Nome                             | CPF            |    Senha       |
            | 55058313 |Apple iPhone 14 128GB - Meia-noite| 17498350530    |   a123456      |