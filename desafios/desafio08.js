class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso,
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
        }

    classificarImc(){
        const imc = this.calcularImc();
        if(imc < 18.5){
            return('Estou abaixo do peso');
            }else if(imc >= 18.5 && imc < 25){
                return('Estou no peso normal');
                }else if(imc >= 25 && imc < 30){
                    return('Estou acima do peso');
                    }else if(imc >= 30 && imc < 40){
                        return('Estou obeso');
                        } else{
                           return('estou com obsidade grave');
     }
    }
}

const jose = new Pessoa('Jose', 50, 1.75);
console.log(jose.classificarImc());
const luiz = new Pessoa('Luiz Fernando', 91, 1.82);
console.log(luiz.classificarImc());