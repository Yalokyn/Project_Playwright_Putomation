# language: pt
Funcionalidade: Logout do Sistema

História:
Como usuário logado, quero sair do sistema para proteger minha conta.

Cenários:
Cenário: Realizar logout com sucesso
  Dado que eu estou logado no sistema
  Quando eu abro o menu lateral
  E clico no link de Logout
  Então eu sou redirecionado de volta para a página de login