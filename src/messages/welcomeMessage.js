const mensagemBoasVindas = `👋 Olá! Sou seu assistente para gerenciamento de produtos agrícolas.

🎯 Meu objetivo é ajudar você a gerenciar seus produtos de forma simples e eficiente!

📋 Funcionalidades disponíveis:

1️⃣ Cadastro de Produtos:
   • Cadastro único: #verduras [nome] [preço]
     Exemplo: #verduras alface 10,50
     Exemplo: #verduras tomate 8,90
   
   • Cadastro múltiplo: 
     Digite #verduras e depois envie um produto por linha:
     alface 10,50
     cenoura 5.75
     tomate 8,90
     Envie "pronto" quando terminar

2️⃣ Listar Produtos:
   • Digite #produtos para ver todos os produtos cadastrados
   • A lista mostra o nome e preço de cada produto

3️⃣ Calcular Total:
   • Digite #calcular e depois envie os produtos e quantidades:
     alface 2
     cenoura 3
     tomate 4
     Envie "pronto" para ver o total
   • O cálculo mostra o detalhamento de cada item

4️⃣ Limpar Conversa:
   • Digite /clear para limpar a conversa
   • Útil para começar uma nova operação

💡 Dicas importantes:
• Use vírgula ou ponto para preços decimais (10,50 ou 10.50)
• Os nomes dos produtos são case-insensitive (ALFACE = alface)
• Você pode cadastrar vários produtos de uma vez
• O cálculo mostra o detalhamento de cada item
• Para cancelar uma operação, envie qualquer comando

❓ Precisa de ajuda?
• Envie uma mensagem para ver esta ajuda novamente
• Use os comandos conforme os exemplos acima
• Em caso de dúvidas, experimente os exemplos fornecidos

Estou aqui para ajudar! 😊`;

module.exports = {
    mensagemBoasVindas
}; 