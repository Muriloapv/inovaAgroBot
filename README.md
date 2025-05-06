# Bot Telegram para Produtores Rurais

Este é um bot do Telegram desenvolvido para ajudar pequenos produtores rurais a gerenciar seus produtos e vendas de forma simples e intuitiva.

## Funcionalidades

- Cadastro de produtos com preços
- Listagem de todos os produtos cadastrados
- Cálculo de valores totais por quantidade
- Registro de vendas com data e hora
- Extrato diário de vendas
- Total geral de vendas

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

### Cadastro de Produtos
- `#verduras [nome] [preço]` - Cadastra um único produto
  Exemplo: `#verduras alface 10,50`
- `#verduras` - Inicia o modo de cadastro múltiplo
  ```
  alface 10,50
  cenoura 5,75
  pronto
  ```

### Listagem de Produtos
- `#produtos` - Lista todos os produtos cadastrados com seus preços

### Cálculo e Vendas
- `#calcular` - Inicia o modo de cálculo
  ```
  alface 2
  cenoura 3
  pronto
  ```
  Após o cálculo, o bot perguntará se deseja salvar a venda
  Responda "sim" para salvar ou "não" para descartar

### Extrato de Vendas
- `#vendas` - Mostra o extrato de vendas do dia com:
  - Hora de cada venda
  - Valor de cada venda
  - Total do dia
  - Total geral de vendas

### Outros Comandos
- `/start` - Inicia o bot e mostra as instruções
- `/clear` - Limpa a conversa e reinicia o bot

## Observações

- O bot armazena os dados em memória, então os produtos e vendas serão perdidos se o bot for reiniciado
- Os preços podem ser informados com vírgula ou ponto (ex: 10,50 ou 10.50)
- Os nomes dos produtos são convertidos para minúsculas para evitar duplicatas
- O extrato de vendas mostra apenas as vendas do dia atual
- O total geral mostra todas as vendas desde o início da execução do bot

## Exemplo de Uso

1. Cadastrar produtos:
   ```
   #verduras alface 10,50
   #verduras cenoura 5,75
   ```

2. Ver produtos cadastrados:
   ```
   #produtos
   ```

3. Calcular uma venda:
   ```
   #calcular
   alface 2
   cenoura 3
   pronto
   ```

4. Salvar a venda:
   - Responda "sim" quando o bot perguntar

5. Ver extrato de vendas:
   ```
   #vendas
   ```

## Formato do Extrato

```
📊 Extrato de Vendas do Dia

🕒 14:30:25
💰 R$ 25,50
📝 Detalhes da venda...

🕒 15:45:10
💰 R$ 18,75
📝 Detalhes da venda...

📈 Total do Dia: R$ 44,25

📊 Total Geral de Vendas: R$ 44,25
```

Em portugues, me diga como posso construir a seguinte aplicação

Ola, quero desenvolver uma aplicação voltada para o pequeno produtor rural.

Essa aplicação deve ser um bot de telegran, ela deve ser capaz de receber mensagens e armazenar em memoria e separadamente por categorias

#verduras - categoria aonde contera o nome e o valor unitari

exemplo: #verduras: alface R$10 

#produtos - apareça todos os produtos cadastrados e seus vlaores

#calcular - o usuario ira mandar o nome do produto e quantidade, o bot deve retornar um calculo bem claro, de quanto ficou a conta

O bot deve ser algo bem intuitivo, aonde seja simples compreenxao, pois sera para pessoas com pouco conhecimento

quero utilizar nodejs como base