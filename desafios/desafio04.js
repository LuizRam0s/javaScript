/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let preco = 250.0;
let tipoPagamento = 'Dividi acima de duas';

if(tipoPagamento === 'Debito'){
    preco -= (preco * 0.1);
    console.log('Valor a pagar: ' + preco);
}else if(tipoPagamento === 'Pix' || tipoPagamento === 'Dinheiro'){
    preco -= (preco * 0.15);
    console.log('Valor a pagar: ' + preco);
}else if(tipoPagamento === 'Pix' || tipoPagamento === 'Dinheiro'){
    preco -= (preco * 0.15);
    console.log('Valor a pagar: ' + preco);
}else if(tipoPagamento === 'Dividi duas'){
    console.log('Valor a pagar: ' + preco);
}else if(tipoPagamento === 'Dividi acima de duas'){
    preco += (preco * 0.1)
    console.log('Valor a pagar: ' + preco);
}