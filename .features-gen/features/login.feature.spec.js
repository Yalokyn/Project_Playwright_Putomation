// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('Login no Sistema', () => {

  test('Login com Sucesso', async ({ Given, When, Then, And, page }) => { 
    await Given('que eu estou na página de login do SauceDemo', null, { page }); 
    await When('eu digito o usuário "standard_user" e a senha "secret_sauce"', null, { page }); 
    await And('aperto o botão de Login', null, { page }); 
    await Then('a página de produtos é visualizada', null, { page }); 
  });

  test('Login com credenciais inválidas', async ({ Given, When, Then, And, page }) => { 
    await Given('que eu estou na página de login do SauceDemo', null, { page }); 
    await When('eu digito o usuário "locked_out_user" e a senha "secret_sauce"', null, { page }); 
    await And('aperto o botão de Login', null, { page }); 
    await Then('um erro de login é mostrado na tela', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Dado que eu estou na página de login do SauceDemo","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"Quando eu digito o usuário \"standard_user\" e a senha \"secret_sauce\"","stepMatchArguments":[{"group":{"start":20,"value":"\"standard_user\"","children":[{"start":21,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"secret_sauce\"","children":[{"start":47,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"E aperto o botão de Login","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Então a página de produtos é visualizada","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Dado que eu estou na página de login do SauceDemo","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"Quando eu digito o usuário \"locked_out_user\" e a senha \"secret_sauce\"","stepMatchArguments":[{"group":{"start":20,"value":"\"locked_out_user\"","children":[{"start":21,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"secret_sauce\"","children":[{"start":49,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"E aperto o botão de Login","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Então um erro de login é mostrado na tela","stepMatchArguments":[]}]},
]; // bdd-data-end