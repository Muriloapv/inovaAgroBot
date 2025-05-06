require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = require('./config/bot');
const { converterPreco } = require('./utils/priceUtils');
const { adicionarProduto, adicionarMultiplosProdutos, listarProdutos, calcularTotalMultiplos } = require('./services/productService');
const { mensagemBoasVindas } = require('./messages/welcomeMessage');

// Variável para armazenar produtos temporariamente durante o cálculo
let produtosParaCalcular = [];
let calculando = false;
let cadastrandoMultiplos = false;
let produtosParaCadastrar = [];

// Função para enviar mensagem de boas-vindas
function enviarMensagemBoasVindas(chatId) {
    bot.sendMessage(chatId, mensagemBoasVindas);
}

// Função para limpar a conversa
async function limparConversa(chatId) {
    try {
        // Envia uma mensagem de "limpando"
        const mensagem = await bot.sendMessage(chatId, '🧹 Limpando a conversa...');
        
        // Deleta a mensagem após 1 segundo
        setTimeout(() => {
            bot.deleteMessage(chatId, mensagem.message_id);
        }, 1000);

        // Envia a mensagem de boas-vindas após limpar
        setTimeout(() => {
            enviarMensagemBoasVindas(chatId);
        }, 1500);
    } catch (error) {
        console.error('Erro ao limpar conversa:', error);
        bot.sendMessage(chatId, '❌ Não foi possível limpar a conversa.');
    }
}

// Manipulador de mensagens
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const texto = msg.text;

    try {
        // Comando para limpar a conversa
        if (texto === '/clear') {
            limparConversa(chatId);
            return;
        }

        // Envia mensagem de boas-vindas para qualquer mensagem que não seja um comando
        if (!texto.startsWith('#') && !texto.startsWith('/')) {
            if (cadastrandoMultiplos) {
                if (texto.toLowerCase() === 'pronto') {
                    if (produtosParaCadastrar.length > 0) {
                        const resultados = adicionarMultiplosProdutos(produtosParaCadastrar);
                        
                        let mensagem = '📝 Resultado do cadastro:\n\n';
                        
                        if (resultados.sucessos.length > 0) {
                            mensagem += '✅ Produtos cadastrados com sucesso:\n';
                            resultados.sucessos.forEach(nome => {
                                mensagem += `- ${nome}\n`;
                            });
                            mensagem += '\n';
                        }
                        
                        if (resultados.erros.length > 0) {
                            mensagem += '❌ Erros no cadastro:\n';
                            resultados.erros.forEach(({ nome, erro }) => {
                                mensagem += `- ${nome}: ${erro}\n`;
                            });
                        }
                        
                        bot.sendMessage(chatId, mensagem);
                    } else {
                        bot.sendMessage(chatId, '❌ Nenhum produto foi adicionado para cadastro!');
                    }
                    cadastrandoMultiplos = false;
                    produtosParaCadastrar = [];
                } else {
                    const partes = texto.split(' ');
                    if (partes.length === 2) {
                        produtosParaCadastrar.push(texto);
                        bot.sendMessage(chatId, `✅ Produto adicionado: ${texto}\nContinue digitando ou envie "pronto" para cadastrar.`);
                    } else {
                        bot.sendMessage(chatId, '❌ Formato incorreto! Use: [nome] [preço]');
                    }
                }
            } else {
                enviarMensagemBoasVindas(chatId);
            }
            return;
        }

        if (texto.startsWith('#verduras')) {
            const partes = texto.split(' ');
            if (partes.length === 3) {
                const nome = partes[1];
                const preco = partes[2];
                try {
                    adicionarProduto(nome, preco);
                    bot.sendMessage(chatId, `✅ Produto "${nome}" cadastrado com sucesso!`);
                } catch (error) {
                    bot.sendMessage(chatId, `❌ Erro ao cadastrar produto: ${error.message}`);
                }
            } else if (partes.length === 1) {
                // Inicia modo de cadastro múltiplo
                cadastrandoMultiplos = true;
                produtosParaCadastrar = [];
                bot.sendMessage(chatId, '📝 Digite os produtos e preços (um por linha):\nExemplo:\nalface 10,50\ncenoura 5.75\n\nEnvie "pronto" quando terminar.');
            } else {
                bot.sendMessage(chatId, '❌ Formato incorreto! Use: #verduras [nome] [preço] ou apenas #verduras para cadastro múltiplo');
            }
        }
        else if (texto === '#produtos') {
            const lista = listarProdutos();
            bot.sendMessage(chatId, lista);
        }
        else if (texto === '#calcular') {
            calculando = true;
            produtosParaCalcular = [];
            bot.sendMessage(chatId, '📝 Digite os produtos e quantidades (um por linha):\nExemplo:\nalface 2\ncenoura 3\n\nEnvie "pronto" quando terminar.');
        }
        else if (calculando) {
            if (texto.toLowerCase() === 'pronto') {
                if (produtosParaCalcular.length > 0) {
                    const resultado = calcularTotalMultiplos(produtosParaCalcular);
                    bot.sendMessage(chatId, resultado);
                } else {
                    bot.sendMessage(chatId, '❌ Nenhum produto foi adicionado para cálculo!');
                }
                calculando = false;
                produtosParaCalcular = [];
            } else {
                const partes = texto.split(' ');
                if (partes.length === 2 && !isNaN(parseInt(partes[1]))) {
                    produtosParaCalcular.push(texto);
                    bot.sendMessage(chatId, `✅ Produto adicionado: ${texto}\nContinue digitando ou envie "pronto" para calcular.`);
                } else {
                    bot.sendMessage(chatId, '❌ Formato incorreto! Use: [nome] [quantidade]');
                }
            }
        }
    } catch (error) {
        console.error('Erro ao processar mensagem:', error);
        bot.sendMessage(chatId, '❌ Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.');
    }
});

// Tratamento de erros
bot.on('polling_error', (error) => {
    console.log('Erro no polling:', error);
});

console.log('🤖 Bot iniciado com sucesso!'); 