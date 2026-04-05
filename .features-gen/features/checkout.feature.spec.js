// Generated from: features\checkout.feature
import { test } from "playwright-bdd";

test.describe('Finalização de Compra (Checkout)', () => {

  test('Realizar checkout com sucesso', async ({ Given, When, Then, And, page }) => { 
    await Given('que eu tenho um item no carrinho', null, { page }); 
    await When('eu acesso o carrinho e clico em Checkout', null, { page }); 
    await And('preencho meus dados "João", "Silva" e "123456"', null, { page }); 
    await And('confirmo a finalização da compra', null, { page }); 
    await Then('a mensagem de sucesso "Thank you for your order!" é exibida', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que eu tenho um item no carrinho","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"Quando eu acesso o carrinho e clico em Checkout","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"E preencho meus dados \"João\", \"Silva\" e \"123456\"","stepMatchArguments":[{"group":{"start":20,"value":"\"João\"","children":[{"start":21,"value":"João","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":28,"value":"\"Silva\"","children":[{"start":29,"value":"Silva","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"123456\"","children":[{"start":39,"value":"123456","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"E confirmo a finalização da compra","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Então a mensagem de sucesso \"Thank you for your order!\" é exibida","stepMatchArguments":[{"group":{"start":22,"value":"\"Thank you for your order!\"","children":[{"start":23,"value":"Thank you for your order!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end