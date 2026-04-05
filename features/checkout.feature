# language: pt
Funcionalidade: Finalização de Compra (Checkout)

História:
Como cliente com itens no carrinho, quero finalizar a compra para receber os produtos.

Cenários:
Cenário: Realizar checkout com sucesso
  Dado que eu tenho um item no carrinho
  Quando eu acesso o carrinho e clico em Checkout
  E preencho meus dados "João", "Silva" e "123456"
  E confirmo a finalização da compra
  Então a mensagem de sucesso "Thank you for your order!" é exibida