/* defina uma função para escerever seu nome e outra para falar se voce é maior de idade*/


function escrevaSeuNome(nome){
    console.log('Meu nome é: ' + nome);
}

function digiteIdade (idade){
    if (idade >= 18){
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

(function main(){
escrevaSeuNome('Luiz Fernando');
digiteIdade(19);
})();