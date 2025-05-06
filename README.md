# Bot Telegram para Produtores Rurais

Este é um bot do Telegram desenvolvido para ajudar pequenos produtores rurais a gerenciar seus produtos e vendas de forma simples e intuitiva.

## Funcionalidades

- Cadastro de produtos com preços
- Listagem de todos os produtos cadastrados
- Cálculo de valores totais por quantidade

## Como usar

1. Primeiro, você precisa criar um bot no Telegram através do [@BotFather](https://t.me/botfather)
2. Copie o token fornecido pelo BotFather
3. Crie um arquivo `.env` na raiz do projeto e adicione:
   ```
   BOT_TOKEN=seu_token_aqui
   ```
4. Instale as dependências:
   ```bash
   npm install
   ```
5. Inicie o bot:
   ```bash
   npm start
   ```

## Comandos disponíveis

- `/start` - Inicia o bot e mostra as instruções
- `#verduras [nome] [preço]` - Cadastra um novo produto
  Exemplo: `#verduras alface 10`
- `#produtos` - Lista todos os produtos cadastrados
- `#calcular [produto] [quantidade]` - Calcula o valor total
  Exemplo: `#calcular alface 2`

## Observações

- O bot armazena os dados em memória, então os produtos serão perdidos se o bot for reiniciado
- Os preços devem ser informados em números (ex: 10, 15.50)
- Os nomes dos produtos são convertidos para minúsculas para evitar duplicatas 



Em portugues, me diga como posso construir a seguinte aplicação

Ola, quero desenvolver uma aplicação voltada para o pequeno produtor rural.

Essa aplicação deve ser um bot de telegran, ela deve ser capaz de receber mensagens e armazenar em memoria e separadamente por categorias

#verduras - categoria aonde contera o nome e o valor unitari

exemplo: #verduras: alface R$10 

#produtos - apareça todos os produtos cadastrados e seus vlaores

#calcular - o usuario ira mandar o nome do produto e quantidade, o bot deve retornar um calculo bem claro, de quanto ficou a conta

O bot deve ser algo bem intuitivo, aonde seja simples compreenxao, pois sera para pessoas com pouco conhecimento

quero utilizar nodejs como base