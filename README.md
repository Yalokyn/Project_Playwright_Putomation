# 🎭 Playwright Automation BDD - SauceDemo

Este repositório contém um projeto de automação de testes End-to-End (E2E) utilizando **Playwright** integrado com **BDD (Gherkin)**. O sistema alvo dos testes é o site de demonstração [SauceDemo](https://www.saucedemo.com/).

[![Playwright E2E Tests with Gherkin](https://github.com/Yalokyn/Project_Playwright_Putomation/actions/workflows/playwright.yml/badge.svg)](https://github.com/Yalokyn/Project_Playwright_Putomation/actions/workflows/playwright.yml)

## 🛠️ Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.
* **[Playwright](https://playwright.dev/)**: Framework de automação E2E de testes web.
* **[Playwright-BDD](https://github.com/vitalets/playwright-bdd)**: Integração nativa para rodar cenários Gherkin no Playwright.
* **[GitHub Actions](https://github.com/features/actions)**: Pipeline de CI/CD para execução automatizada dos testes.

## 📂 Estrutura do Projeto

```text
├── .github/workflows/   # Configuração da pipeline de CI/CD do GitHub Actions
├── features/            # Especificações de requisitos no formato Gherkin (.feature)
├── steps/               # Implementação dos passos de automação (Step Definitions)
├── playwright.config.ts # Configurações globais do Playwright
└── package.json         # Dependências e scripts do projeto
