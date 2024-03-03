/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


function precoParaPagar(valor, formaPagamento) {
    if (formaPagamento === 'Debito') {
        return valor -= valor * 0.1;
    } else if (formaPagamento === 'Pix' || formaPagamento === 'Dinheiro') {
        return valor -= valor * 0.15;
    } else if (formaPagamento === 'Dividi duas') {
        return valor
    } else if (formaPagamento === 'Dividi acima de duas') {
        return valor += valor * 0.1;
    }
}

function produto1() {
    console.log('Valor a pagar é: $' + precoParaPagar(28.8, 'Dividi acima de duas'));
}
function produto() {
    console.log('Valor a pagar é: $' + precoParaPagar(15.50, 'Pix'));
}
function produto2() {
    console.log('Valor a pagar é: $' + precoParaPagar(100.00, 'Dividi duas'));
}

produto();
produto1();
produto2();