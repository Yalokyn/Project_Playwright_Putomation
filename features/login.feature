# language: pt
Funcionalidade: Login no Sistema

História:
Como usuário do sistema, quero realizar login para acessar a loja e realizar compras.

Cenários:
Cenário: Login com Sucesso
  Dado que eu estou na página de login do SauceDemo
  Quando eu digito o usuário "standard_user" e a senha "secret_sauce"
  E aperto o botão de Login
  Então a página de produtos é visualizada

Cenário: Login com credenciais inválidas
  Dado que eu estou na página de login do SauceDemo
  Quando eu digito o usuário "locked_out_user" e a senha "secret_sauce"
  E aperto o botão de Login
  Então um erro de login é mostrado na tela