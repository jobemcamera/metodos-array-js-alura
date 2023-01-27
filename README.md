# Curso Métodos de Array com JavaScript - Alura

Neste curso, pude aprender a criar filtros de uma lista (API).

Foram utilizados métodos de array para o consumo e manipulação dos dados contidos na API. São eles:

- Método forEach;
- Método map;
- Método filter;
- Método sort;
- Método reduce.

Em cada destes métodos pude aprimorar ou aprender coisas novas.

---
## O que eu aprendi

Para o método forEach, consolidei o conhecimento de operador ternário

```js
function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        //let disponibilidade = verificarDisponibilidadeDoLivro(livro)
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel'
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="Capa do livro ${livro.imagem}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
}
```
---
Para o método map, aprendi como utilizar o operador spread (...) 

```javascript
function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        // cópia de toda array e altera somente o preco
        return  {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}
```
---
Para o método filter, assim como o forEach, consolidei o conhecimento de operador ternário

```javascript
function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    // livros vem do main.js que já possui todos os livros json
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(aplicarDesconto(livrosFiltrados))
    
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(aplicarDesconto(livrosFiltrados))
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}
```
---
Para o método sort, aprendi a ordenar de maneira simples uma lista de acordo com a necessidade

```javascript 
function ordenarLivrosPorPreco() {
    // sort((a, b) => a.preco - b.preco) ordena do menor para o maior
    // sort((a, b) => b.preco - a.preco) ordena do maior para o menor
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(aplicarDesconto(livrosOrdenados))
}
```
---
E finalmente, para o método reduce, aprendi a como reduzir uma array inteira a um único valor de acordo com a finalidade

```javascript
function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}
```
