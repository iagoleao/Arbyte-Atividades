// Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// iguais que o jogador A e B colocaram.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3

let rs = require('readline-sync');

let nome1 = rs.question('Insira seu nome: ');
let nome2;
let numero2 = [];
let numero1 = [];


for (let index = 0; index < 5; index++) 
{
    let n1 = rs.questionInt('Insira um números de 1 ao 10: ');
    numero1.push(n1);
}

nome2 = rs.question('Insira seu nome: ');

for (let i = 0; i < 5; i++) 
{
    n2 = rs.questionInt('Insira um números de 1 ao 10: ');
    numero2.push(n2);
}

let result = [];
for (let x = 0; x < 5; x++) 
{
    for (let y = 0; y < 5; y++) 
    {
        if(numero1[x] === numero2[y])
        {
            result.push(numero1[x]);
        }
    }
}           
console.log(`Os números iguais são: ${result}`);

