// Generated from: features\carrinho.feature
import { test } from "playwright-bdd";

test.describe('Gerenciamento do Carrinho de Compras', () => {

  test('Adicionar produto ao carrinho', async ({ Given, When, Then, page }) => { 
    await Given('que eu estou logado no sistema', null, { page }); 
    await When('eu clico no botão de adicionar a mochila ao carrinho', null, { page }); 
    await Then('o ícone do carrinho deve exibir "1" item', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\carrinho.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que eu estou logado no sistema","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"Quando eu clico no botão de adicionar a mochila ao carrinho","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Então o ícone do carrinho deve exibir \"1\" item","stepMatchArguments":[{"group":{"start":32,"value":"\"1\"","children":[{"start":33,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end