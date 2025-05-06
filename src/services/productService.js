const { converterPreco, formatarPreco } = require('../utils/priceUtils');

// Armazenamento em memória dos produtos
const produtos = new Map();

// Função para adicionar produto
function adicionarProduto(nome, preco) {
    try {
        if (!nome || !preco) {
            throw new Error('Nome e preço são obrigatórios');
        }

        const precoConvertido = converterPreco(preco);
        if (isNaN(precoConvertido)) {
            throw new Error('Preço inválido');
        }

        if (precoConvertido <= 0) {
            throw new Error('Preço deve ser maior que zero');
        }

        produtos.set(nome.toLowerCase(), precoConvertido);
        console.log(`Produto adicionado: ${nome} - R$ ${formatarPreco(precoConvertido)}`);
        return true;
    } catch (error) {
        console.error('Erro ao adicionar produto:', error.message);
        throw error;
    }
}

// Função para adicionar múltiplos produtos
function adicionarMultiplosProdutos(produtosLista) {
    const resultados = {
        sucessos: [],
        erros: []
    };

    for (const item of produtosLista) {
        const [nome, preco] = item.split(' ');
        try {
            adicionarProduto(nome, preco);
            resultados.sucessos.push(nome);
        } catch (error) {
            resultados.erros.push({ nome, erro: error.message });
        }
    }

    return resultados;
}

// Função para listar produtos
function listarProdutos() {
    let mensagem = '📋 Lista de Produtos:\n\n';
    if (produtos.size === 0) {
        return '📋 Nenhum produto cadastrado ainda.';
    }
    
    produtos.forEach((preco, nome) => {
        mensagem += `${nome}: R$ ${formatarPreco(preco)}\n`;
    });
    return mensagem;
}

// Função para calcular valor total de múltiplos produtos
function calcularTotalMultiplos(produtosLista) {
    let total = 0;
    let detalhes = '💰 Cálculo Detalhado:\n\n';
    let produtosNaoEncontrados = [];
    let subtotais = [];

    for (const item of produtosLista) {
        const [nome, quantidade] = item.split(' ');
        const preco = produtos.get(nome.toLowerCase());
        
        if (preco) {
            const subtotal = preco * parseInt(quantidade);
            total += subtotal;
            subtotais.push(subtotal);
            detalhes += `${nome}:\n`;
            detalhes += `  Quantidade: ${quantidade}\n`;
            detalhes += `  Preço unitário: R$ ${formatarPreco(preco)}\n`;
            detalhes += `  Subtotal: R$ ${formatarPreco(subtotal)}\n\n`;
        } else {
            produtosNaoEncontrados.push(nome);
        }
    }

    detalhes += `📊 Total Geral: R$ ${formatarPreco(total)}\n`;
    detalhes += `\n🧮 Soma simples: ${subtotais.map(s => formatarPreco(s)).join(' + ')} = R$ ${formatarPreco(total)}\n`;

    if (produtosNaoEncontrados.length > 0) {
        detalhes += `\n❌ Produtos não encontrados: ${produtosNaoEncontrados.join(', ')}`;
    }

    return detalhes;
}

module.exports = {
    adicionarProduto,
    adicionarMultiplosProdutos,
    listarProdutos,
    calcularTotalMultiplos
}; 