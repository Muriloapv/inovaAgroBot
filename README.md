# Bot Telegram para Produtores Rurais

Este é um bot do Telegram desenvolvido para ajudar pequenos produtores rurais a gerenciar seus produtos e vendas de forma simples e intuitiva.

## Funcionalidades

- Cadastro de produtos com preços
- Listagem de todos os produtos cadastrados
- Cálculo de valores totais por quantidade
- Registro de vendas com data e hora
- Extrato diário de vendas
- Total geral de vendas

## Passo a Passo para Configuração

### Passo 1: Criar o Bot no Telegram
1. Acesse o [@BotFather](https://t.me/botfather) no Telegram
2. Envie o comando '/newbot'
3. Digite um nome para seu bot
4. Digite um username para seu bot (deve terminar em 'bot')
5. Guarde o token que o BotFather fornecer

### Passo 2: Configurar o Projeto
1. Clone este repositório
2. Crie um arquivo '.env' na raiz do projeto
3. Adicione seu token no arquivo '.env':
   - BOT_TOKEN=seu_token_aqui

### Passo 3: Instalar Dependências
1. Abra o terminal na pasta do projeto
2. Execute o comando:
   - npm install

### Passo 4: Iniciar o Bot
1. No terminal, execute:
   - npm start
2. O bot estará online e pronto para uso

## Como Usar o Bot

### Passo 1: Cadastrar Produtos
Opção 1 - Cadastro Único:
- #verduras alface 10,50

Opção 2 - Cadastro Múltiplo:
- #verduras
- alface 10,50
- cenoura 5,75
- pronto

### Passo 2: Verificar Produtos
- #produtos
- Mostra lista de todos os produtos cadastrados
- Exibe nome e preço de cada produto

### Passo 3: Realizar uma Venda
1. Inicie o cálculo:
   - #calcular
2. Digite os produtos e quantidades:
   - alface 2
   - cenoura 3
3. Digite 'pronto' para ver o total
4. Responda 'sim' para salvar a venda

### Passo 4: Consultar Vendas
- #vendas
- Mostra vendas do dia
- Exibe hora, valor e detalhes
- Apresenta total do dia e geral

## Comandos Disponíveis

### Comandos Principais
- '/start' - Inicia o bot
- '/clear' - Limpa a conversa
- '#verduras' - Cadastra produtos
- '#produtos' - Lista produtos
- '#calcular' - Calcula vendas
- '#vendas' - Mostra extrato

## Exemplo de Extrato

📊 Extrato de Vendas do Dia

🕒 14:30:25
💰 R$ 25,50
📝 Detalhes da venda...

🕒 15:45:10
💰 R$ 18,75
📝 Detalhes da venda...

📈 Total do Dia: R$ 44,25

📊 Total Geral de Vendas: R$ 44,25

## Observações Importantes

1. Armazenamento
   - Dados são salvos em memória
   - Produtos e vendas são perdidos ao reiniciar o bot

2. Formato de Preços
   - Use vírgula ou ponto (10,50 ou 10.50)
   - Números decimais são aceitos

3. Nomes de Produtos
   - São convertidos para minúsculos
   - Evita duplicatas

4. Extrato de Vendas
   - Mostra apenas vendas do dia atual
   - Total geral inclui todas as vendas