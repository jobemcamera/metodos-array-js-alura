let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    // sort((a, b) => a.preco - b.preco) ordena do menor para o maior
    // sort((a, b) => b.preco - a.preco) ordena do maior para o menor
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(aplicarDesconto(livrosOrdenados))
}