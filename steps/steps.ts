import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

// --- LOGIN ---
Given('que eu estou na página de login do SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

When('eu digito o usuário {string} e a senha {string}', async ({ page }, user, password) => {
  await page.locator('[data-test="username"]').fill(user);
  await page.locator('[data-test="password"]').fill(password);
});

When('aperto o botão de Login', async ({ page }) => {
  await page.locator('[data-test="login-button"]').click();
});

Then('a página de produtos é visualizada', async ({ page }) => {
  await expect(page.locator('.title')).toHaveText('Products');
});

Then('um erro de login é mostrado na tela', async ({ page }) => {
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

// --- PRÉ-CONDIÇÃO GERAL ---
Given('que eu estou logado no sistema', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

// --- CARRINHO ---
When('eu clico no botão de adicionar a mochila ao carrinho', async ({ page }) => {
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

Then('o ícone do carrinho deve exibir {string} item', async ({ page }, quantity) => {
  await expect(page.locator('.shopping_cart_badge')).toHaveText(quantity);
});

Given('que eu tenho um item no carrinho', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

// --- CHECKOUT ---
When('eu acesso o carrinho e clico em Checkout', async ({ page }) => {
  await page.locator('.shopping_cart_link').click();
  await page.locator('[data-test="checkout"]').click();
});

When('preencho meus dados {string}, {string} e {string}', async ({ page }, nome, sobrenome, cep) => {
  await page.locator('[data-test="firstName"]').fill(nome);
  await page.locator('[data-test="lastName"]').fill(sobrenome);
  await page.locator('[data-test="postalCode"]').fill(cep);
  await page.locator('[data-test="continue"]').click();
});

When('confirmo a finalização da compra', async ({ page }) => {
  await page.locator('[data-test="finish"]').click();
});

Then('a mensagem de sucesso {string} é exibida', async ({ page }, mensagem) => {
  await expect(page.locator('.complete-header')).toHaveText(mensagem);
});

// --- LOGOUT ---
When('eu abro o menu lateral', async ({ page }) => {
  await page.locator('#react-burger-menu-btn').click();
});

When('clico no link de Logout', async ({ page }) => {
  await page.locator('#logout_sidebar_link').click();
});

Then('eu sou redirecionado de volta para a página de login', async ({ page }) => {
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});