# 🎭 Testes Automatizados com Playwright - Sauce Demo

Projeto de testes automatizados web utilizando Playwright com a abordagem BDD (Gherkin).

## Site testado

**Sauce Demo** — [https://www.saucedemo.com](https://www.saucedemo.com/)
É um site de e-commerce fictício feito justamente pra praticar automação de testes.

## Funcionalidades cobertas

| Funcionalidade | Cenários | Feature |
| :--- | :--- | :--- |
| Login | 2 cenários | `features/login.feature` |
| Carrinho de Compras | 1 cenário | `features/carrinho.feature` |
| Checkout | 1 cenário | `features/checkout.feature` |
| Logout | 1 cenário | `features/logout.feature` |

## Estrutura do projeto

```text
Project_Playwright_Putomation/
├── .github/
│   └── workflows/
│       └── playwright.yml    # Pipeline de CI com GitHub Actions
├── features/                 # Cenários escritos em Gherkin (BDD)
│   ├── login.feature
│   ├── carrinho.feature
│   ├── checkout.feature
│   └── logout.feature
├── steps/                    # Mapeamento dos passos das features (Step Definitions)
│   └── steps.ts              
├── playwright.config.ts      # Configurações globais do Playwright e BDD
└── package.json
