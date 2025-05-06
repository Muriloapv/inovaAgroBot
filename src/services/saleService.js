// Armazenamento em memória das vendas
const vendas = [];

// Função para adicionar uma venda
function adicionarVenda(valorTotal, detalhes) {
    const venda = {
        data: new Date(),
        valor: valorTotal,
        detalhes: detalhes
    };
    vendas.push(venda);
    return venda;
}

// Função para listar vendas do dia
function listarVendasDoDia() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    const vendasDoDia = vendas.filter(venda => {
        const dataVenda = new Date(venda.data);
        return dataVenda >= hoje;
    });

    let mensagem = '📊 Extrato de Vendas do Dia\n\n';
    let totalDia = 0;

    if (vendasDoDia.length === 0) {
        return '📊 Nenhuma venda registrada hoje.';
    }

    vendasDoDia.forEach(venda => {
        const dataFormatada = venda.data.toLocaleTimeString('pt-BR');
        mensagem += `🕒 ${dataFormatada}\n`;
        mensagem += `💰 R$ ${venda.valor.toFixed(2).replace('.', ',')}\n`;
        mensagem += `📝 ${venda.detalhes}\n\n`;
        totalDia += venda.valor;
    });

    mensagem += `\n📈 Total do Dia: R$ ${totalDia.toFixed(2).replace('.', ',')}`;
    return mensagem;
}

// Função para calcular total de todas as vendas
function calcularTotalVendas() {
    return vendas.reduce((total, venda) => total + venda.valor, 0);
}

module.exports = {
    adicionarVenda,
    listarVendasDoDia,
    calcularTotalVendas
}; 