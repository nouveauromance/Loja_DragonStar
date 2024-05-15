const removeproduct = document.getElementsByClassName("remove-product")
console.log(removeproduct)
for(var i = 0; 1< removeproduct.length; i++) {
    removeproduct[i].addEventListener("removido", function() {
        console.log(event.target)
    })
}

const ProdutoUnidade = document.getElementsByClassName("Produto-Unidade")
for(var i = 0; i < ProdutoUnidade.length;i++) {
    console.log(Produto-Unidade[i])
    const Preço = ProdutoUnidade[i].getElementsByClassName("ProdutoUnidade")[0].innerText
    const productQuantity = ProdutoUnidade[i].getElementsByClassName("product-Quantity")[0].value
    console.log(productQuantity)
}
