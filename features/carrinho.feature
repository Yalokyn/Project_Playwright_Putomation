# language: pt
Funcionalidade: Gerenciamento do Carrinho de Compras

História:
Como cliente logado, quero adicionar produtos ao carrinho para comprá-los.

Cenários:
Cenário: Adicionar produto ao carrinho
  Dado que eu estou logado no sistema
  Quando eu clico no botão de adicionar a mochila ao carrinho
  Então o ícone do carrinho deve exibir "1" item