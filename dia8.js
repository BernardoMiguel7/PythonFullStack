//1
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,  
    output:process.stdout
});

function calcularMedia (){
    rl.question("Digite a primeira nota (de 0 a 10:", (nota1) => {
        rl.question("Digite a segunda nota (de 0 a 10):", (nota2) => {
            rl.question("Digite a terceira nota (de 0 a 10):", (nota3) => {
                rl.question("Digite a quarta nota (de 0 a 10):", (nota4) => {
                    nota1 = parseFloat(nota1);
                    nota2 = parseFloat(nota2);
                    nota3 = paseFloat(nota3);
                    nota4 = parseFloat(nota4);
                    //
                    let media = (nota1 + nota2+ nota3+ nota4)/4;
                    console.log ('Sua media é: ${media.toFixed(2)}');
                    if (media >= 7) {
                        console.log('Aprovado');
                    }else{
                        console.log('Reprovado');
                    }
                    rl.close;
                });
            });
        });
    });
}

//2

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somarPares() {
    rl.question("Digite um numero para o inicio do intervalo:", (inicio) =>{
        rl.question("Digite um numero final para o intervalo:", (final) =>{
            inicio = parseInt(inicio);
            final = parseInt(final);
            let soma = 0;
            let i = inicio;
            
            while (i <= fim) {
                if (i %2 === 0){
                    soma +=1;
                }
                i++;
            }
            console.log ('A soma dos numeros pares no intervalo de ${inicio} a ${fim} é: ${soma}');
            rl.close();
        });
    });
});
somarParesWhile();

//3

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function 