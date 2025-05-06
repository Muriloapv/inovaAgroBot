// Função para converter string de preço para número
function converterPreco(precoStr) {
    if (!precoStr) return NaN;
    
    // Remove espaços e caracteres não numéricos exceto ponto e vírgula
    let precoLimpo = precoStr.trim().replace(/[^\d,.]/g, '');
    
    // Se tiver vírgula e ponto, mantém apenas o último
    if (precoLimpo.includes(',') && precoLimpo.includes('.')) {
        const ultimoPonto = precoLimpo.lastIndexOf('.');
        const ultimaVirgula = precoLimpo.lastIndexOf(',');
        if (ultimoPonto > ultimaVirgula) {
            precoLimpo = precoLimpo.replace(/,/g, '');
        } else {
            precoLimpo = precoLimpo.replace(/\./g, '').replace(',', '.');
        }
    } else {
        // Se só tiver vírgula, converte para ponto
        precoLimpo = precoLimpo.replace(',', '.');
    }
    
    return parseFloat(precoLimpo);
}

// Função para formatar preço
function formatarPreco(preco) {
    if (isNaN(preco)) return '0,00';
    return preco.toFixed(2).replace('.', ',');
}

module.exports = {
    converterPreco,
    formatarPreco
}; 