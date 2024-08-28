const { defineConfig } = require("cypress")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild")

const environment = process.env.ENVIRONMENT || 'qa' // TO RUN: ENVIRONMENT=dev npm run cy:open
const dados = require(`./cypress/config/${environment}.js`)

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({ plugins: [createEsbuildPlugin.default(config)] })
  )
  return config
}

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  projectId: "TesteTecnico",
  fixturesFolder: "false",
  retries: 0,
  e2e: {
    setupNodeEvents,
    reporter: require.resolve("@badeball/cypress-cucumber-preprocessor/pretty-reporter"),
    specPattern: "**/*.feature",
    baseUrl: dados.baseUrl,
    viewportWidth: dados.viewportWidth,
    viewportHeight: dados.viewportHeight,
    env: {
      ...dados,
    }
  }
})













// env: {
//   ...dados,
//   allure: true,
//   allureReuseAfterSpec: true,
//   hideXhr: true
  // experimentalRunAllSpecs:  true,
  // setupNodeEvents: (on, config) => {
  //   // allureWriter(on, config)
  //   addCucumberPreprocessorPlugin(on,config)
  //   on(
  //     "file:preprocessor", 
  //     createBundler({ plugins: [ createEsbuildPlugin.default(config)] })
  //   )
  //   return config

  // const environment = config.env.ENVIRONMENT ||'qa' // --env ENVIRONMENT=dev
  // const envConfig = require(`./cypress/config/${environment}.js`)

  // config.baseUrl = envConfig.baseUrl
  // config.viewportWidth = envConfig.viewportWidth
  // config.viewportHeight = envConfig.viewportHeight
  // config.env = 
  //   {
  //     ...config.env,
  //     ...envConfig,
  //   }
  // return config
// }