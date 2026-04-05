// Generated from: features\logout.feature
import { test } from "playwright-bdd";

test.describe('Logout do Sistema', () => {

  test('Realizar logout com sucesso', async ({ Given, When, Then, And, page }) => { 
    await Given('que eu estou logado no sistema', null, { page }); 
    await When('eu abro o menu lateral', null, { page }); 
    await And('clico no link de Logout', null, { page }); 
    await Then('eu sou redirecionado de volta para a página de login', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\logout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que eu estou logado no sistema","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"Quando eu abro o menu lateral","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"E clico no link de Logout","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Então eu sou redirecionado de volta para a página de login","stepMatchArguments":[]}]},
]; // bdd-data-end