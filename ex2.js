// Questão 7

let valorDoPedido = 200;

if (valorDoPedido < 50) {
    console.log("Frete não disponível!");
} else if ( 50 <= valorDoPedido && valorDoPedido < 199.99) {
    console.log("Frete com custo adicional!")
} else {
    console.log("Frete grátis!");
};

