[javascript-image]: https://img.shields.io/badge/javascript-red
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[cucumber-image]: https://img.shields.io/badge/cucumber-4.3.1-brightgreen
[cucumber-url]: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
[cypress-image]:https://img.shields.io/badge/cypress-13.6.3-beige
[cypress-url]:https://docs.cypress.io/guides/overview/why-cypress

# Project structure cypress + cucumber
[![JavaScript Version][javascript-image]][javascript-url]
[![Cucumber Version][cucumber-image]][cucumber-url]
[![Cypress Version][cypress-image]][cypress-url]

Estrutura do projeto:
```
./
├── .github/
│   └── workflows/
│        └── qaops.yaml
├── ci/
├── cypress/
│   ├── config/
│   │    ├── qa.js
│   ├── e2e/
│   │    └── features/
│   ├── support/
│   │    └── elements/
│   │    └── pages/
│   │    └── step_definitions/
│   │    ├── e2e.js
│   │    └── utils.js
├── .gitignore
├── cypress.config.js
├── cypress.env.json
├── package.json
└── README.md
```

É necessário ter o NodeJS(versão 14 ou superior recomendado) instalado.

Para executar o projeto são necessários alguns passos

1) Estar conectado na VPN da VIA(Global Protect)

2) Configurar o proxy para bater na máquina de automação, para que seja possível acessar os domínios da VIA n a automação. Para isso é necessário o seguinte comando(Recomendado usar o GitBash como terminal) : 

export HTTP_PROXY=http://automacao:ViaVarejo@10.228.5.31:8080

Para verificar se de fato foi feito corretamente, utilize o comando abaixo para imprimir o valor : 

echo $HTTP_PROXY

3) Para executar de fato os testes automatizados basta utilizar o comando : 

npx cypress run

4) Caso prefira utilizar a interface do cypress para escolher um navegador, ver os testes rodando visualmente e selecionar quais features por vez quer testar, utilize o comando : 

npx cypress open
