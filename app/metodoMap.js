function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        // cópia de toda array e altera somente o preco
        return  {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}