//1- Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

for(tentativas = 0; tentativas < 3; tentativas++){
  var nota = parseFloat(prompt("Digite sua nota de 0 a 10"))

  if(nota >= 0 && nota <=10){
     document.write("Nota válida " + nota)
     break
}else{
  alert("Nota inválida! Digite sua nota de 0 e 10.")
}
 }
if (nota < 0 || nota > 10 || isNaN(nota)) {
    alert("Você excedeu o número de tentativas.");
}

//2- Crie um loop que imprima todos os números de 1 a 100.

var numeros = "";
for (var i = 1; i <= 100; i++) {
  numeros += i;
  if (i !== 100) {
    numeros += ", ";
  }
}
document.write(numeros);

//3- Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

for(i=0; i < 3; i++){
  var nome = String(prompt("Olá, qual o seu nome?"))
  var senha = parseInt(prompt("Seja bem-vindo(a) " + nome + ", agora digite a sua senha de três números."))
  if(senha === 123){
   alert("Senha correta. Acesso Permitido!")
    break
  }else{
    alert("Senha incorreta. tente novamente !")
  }
}
 if (senha !== 123) {
  alert("Excedeu o limite de tentativas.");
}

//4- Faça um programa que leia e valide as seguintes informações:
   Nome: maior que 3 caracteres;
   Idade: entre 0 e 150;
   Salário: maior que zero;
   Sexo: 'f' ou 'm';
   Estado Civil: 's', 'c', 'v', 'd'.
   Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

var nome = String(prompt("Olá, qual o seu nome?"))
for(i = 0; i < 3; i++){
var idade = parseInt(prompt("Digite a sua idade."))
if(idade >= 0 && idade <= 150){
var salario = parseFloat(prompt("Digite o valor do seu salário."))
var sexo = String(prompt("Qual o seu sexo? digite 'M' para masculino ou 'F' para feminino."))
var estadoCivil = String(prompt("Qual o seu estado civil? digite 'S' para solteiro(a), 'C' para casado(a), 'V' para viúvo(a) ou 'D' para divorciado."))
document.write(`Nome: ${nome} <br>`)
document.write(`Idade: ${idade} <br>`)
document.write(`Salário: ${salario} <br>`)
document.write(`Sexo: ${sexo} <br>`)
document.write(`Estado Civil: ${estadoCivil} <br>`)
break
}else{
  alert("Digite uma idade entre 0 e 150.")
}
}
if(i == 5){
  alert("Você atingiu o número máximo de tentativas.")
}


//5- Supondo que a população de um país A seja de 80.000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja de 200.000 habitantes com uma taxa de crescimento de 1,5%. 
   faça um programa que calcule o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

  var paisA = 80.000
var txCrescA = 0.03
var paisB = 200.000
var txCrescB = 0.015
var anos = 0
while(paisA < paisB) {
  paisA += paisA * txCrescA;
  paisB += paisB * txCrescB;
  anos++;
}
document.write(" Número de anos necessários para  a população do pais A ultrapasse ou iguale a população de B é de:", anos + " anos.");


//6- Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.
var paisA = parseFloat(prompt("Digite a quantidade de habitantes do país A."))
var txCrescA = parseFloat(prompt("digite a taxa de crescimento anual dos habitantes do país A."))
var paisB = parseFloat(prompt("Digite a quantidade de habitantes do país B."))
var txCrescB = parseFloat(prompt("Digite a taxa de crescimento anual dos habitantes do país B."))
var anos = 0
while(paisA < paisB) {
  paisA += paisA * txCrescA;
  paisB += paisB * txCrescB;
  anos++;
}
document.write("Número de anos para que a população de A ultrapasse ou iguale a população de B é de: ", anos + " anos.");

//7 Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.

for (let i = 1; i <= 20; i++) {
  document.write(i);
}
//8  Faça um programa que leia 5 números e informe o maior número.

  function encontrarMaiorNumero() {
  var maiorNumero = Number.MIN_VALUE; //
  for (var i = 0; i < 5; i++) {
    const numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    if (numero > maiorNumero) {
      maiorNumero = numero;
    }
  }

  document.write("O número maior é:", maiorNumero);
}
encontrarMaiorNumero();

//9 Faça um programa que leia 5 números e informe a soma e a média dos números.
  function calcularSomaEMedia() 
{
  var soma = 0; 
  for (var i = 0; i < 5; i++) {
    const numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
    soma += numero; 
  }
  const media = soma / 5; 
  document.write("A soma dos números é:", soma);
  Document.write("A média dos números é:", media);
}
calcularSomaEMedia();

//10 Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.
var i = 1;
while (i <= 50) {
  if (i % 2 !== 0) {
    document.write(i);
  }
  i++;
}

//11 Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.
  function gerarNumerosEntre(inicio, fim) {
  var numeros = [];
  for (var i = inicio; i <= fim; i++) {
    numeros.push(i);
  }
  return numeros.join(', ');
}
const numeroInicial = parseInt(prompt("Digite o número inicial:"));
const numeroFinal = parseInt(prompt("Digite o número final:"));

const   
 resultado = gerarNumerosEntre(numeroInicial, numeroFinal);
document.write(resultado);

//12 Altere o programa anterior para mostrar no final a soma dos números.
  function gerarNumerosEntre(inicio, fim) {
  var numeros = [];
  var soma = 0; 
  for (var i = inicio; i <= fim; i++) {
    numeros.push(i);
    soma += i; 
  }
  return "Números: " + numeros.join(', ') + "<br>Soma: " + soma;
}
var numeroInicial = parseInt(prompt("Digite o número inicial:"));
var numeroFinal = parseInt(prompt("Digite o número final:"));
var resultado = gerarNumerosEntre(numeroInicial, numeroFinal);
document.write(resultado);

//13 Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 e 10. O usuário deve informar de qual número ele deseja ver a tabuada.
var numero = parseInt(prompt("Digite um número para multiplicar:"));
if (!isNaN(numero)) {
  for (let i = 1; i <= 10; i++) {
       document.write(`${numero} x ${i} = ${numero * i}<br>`);
  }
} else {
  document.write("Por favor, digite um número.");
}
//14 Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.
var base = parseInt(prompt("Digite a base:"));
var expoente = parseInt(prompt("Digite o expoente:"));
var resultado = 1;
if (expoente >= 0) {
  for (let i = 0; i < expoente; i++) {
    resultado *= base;
  }
  document.write(`${base} elevado a ${expoente} é igual a ${resultado}`);
} else {
  document.write("Expoente inválido. Digite um número inteiro.");
}
//15 Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.
var pares = 0;
var impares = 0;
for (let i = 0; i < 10; i++) {
  var numero = parseInt(prompt("Digite o número " + (i + 1) + ":"));
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}
document.write("Quantidade de números pares:", pares);
dicumenr.write("Quantidade de números ímpares:", impares);
//16 Gere a sequência de Fibonacci até o n-ésimo termo.
var n = 10;
var a = 0;
var b = 1;
document.write(a);
document.write(b);
for (var i = 2; i < n; i++) {
  var c = a + b;
  document.write(c);
  a = b;
  b = c;
}
//17 Gere a sequência de Fibonacci até que o valor seja maior que 500.
var a = 0;
var b = 1;
while (b <= 500) {
  document.write(b);
  var c = a + b;
  a = b;
  b = c;
}
//18 Calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5! = 5 × 4 × 3 × 2 × 1 = 120.
var numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
var fatorial = 1;
if (numero >= 0) {
  for (var i = numero; i > 1; i--) {
    fatorial *= i;
  }
  document.write(`O fatorial de ${numero} é ${fatorial}`);
} else {
  document.write("Insira um número inteiro.");}
//19 Determine o menor, o maior e a soma dos valores de um conjunto de N números fornecidos.
var n = parseInt(prompt("Digite o número de elementos:"));
var menor = Infinity; 
var maior = -Infinity; 
var soma = 0;
for (var i = 0; i < n; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}:`));
  if (numero < menor) {
    menor = numero;
  }
  if (numero > maior) {
    maior = numero;
  }
  soma += numero;
}
document.write(`O menor valor é: ${menor}`);
document.write(`O maior valor é: ${maior}`);
document.write(`A soma dos valores é: ${soma}`);

//20 Altere o programa anterior para aceitar apenas números entre 0 e 1000.
var entrada = prompt("Digite os números entre 0 e 1000, separados por vírgula:");
var numeros = entrada.split(",").map(Number);
var menor = 1001; 
var maior = -1;   
var soma = 0;
for (var i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 0 && numeros[i] <= 1000) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
    soma += numeros[i];
  } else {
    document.write("Número inválido:", numeros[i]);
  }
}
document.write("Menor valor:", menor);
document.write("Maior valor:", maior);
document.write("Soma dos valores:", soma);
21 Permita ao usuário calcular o fatorial várias vezes e limite o fatorial a números inteiros positivos menores que 16.
while (true) {
  var numero = parseInt(prompt("Digite um número  menor que 16 para calcular o fatorial (ou 0 para sair):"));

  if (numero === 0) {
    break;
  }

  if (numero < 0 || numero >= 16) {
    document.write("Número inválido. Digite um número entre 0 e 15.");
    continue;
  }
  var fatorial = 1;
  for (var i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  document.write(`O fatorial de ${numero} é ${fatorial}`);
}
//22 Determine se um número inteiro é primo.
var numero = parseInt(prompt("Digite um número:"));
var divisores = 0;
for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        divisores++;
        break; 
    }
}
if (divisores === 0 && numero > 1) {
    document.write(numero + " é um número primo.");
} else {
    document.write(numero + " não é um número primo.");
}
//23 Modifique o programa para indicar, caso o número não seja primo, por quais números ele é divisível.
var numero = parseInt(prompt("Digite um número:"));
var divisores = 0;
var divisoresArray = [];
for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        divisores++;
        divisoresArray.push(i);
        divisoresArray.push(numero / i); 
    }
}
if (divisores === 0 && numero > 1) {
    document.write(numero + " é um número primo.");
} else {
   document.write(numero + " não é um número primo. É divisível por:");
   document.write(divisoresArray);
}
//24 Exiba todos os números primos entre 1 e N.
var N = parseInt(prompt("Digite um número inteiro:"));
document.write("Números primos entre 1 e " + N + ":");
for (var num = 2; num <= N; num++) {
    var Primo = true;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            Primo = false;
            break; 
        }
    }
    if (Primo) {
        document.write(num);
    }
}
//25 Calcule a média aritmética de N notas fornecidas.
var quantidadeNotas = parseInt(prompt("Digite a quantidade de notas:"));
var somaNotas = 0;
var i = 1;
while (i <= quantidadeNotas) {
    var nota = parseFloat(prompt("Digite a nota " + i + ":"));
    somaNotas += nota;
    i++;
}
var media = somaNotas / quantidadeNotas;
document.write("A média das notas é: " + media.toFixed(2)); 
//26 Solicite a idade de N pessoas e determine se a média indica uma turma jovem (0-25), adulta (26-60) ou idosa (acima de 60).
var n = parseInt(prompt("Digite o número de pessoas:"));
var somaIdades = 0;
for (var i = 1; i <= n; i++) {
    var idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));
    somaIdades += idade;
}
var mediaIdades = somaIdades / n;
if (mediaIdades <= 25) {
    document.write("A turma é predominantemente jovem.");
} else if (mediaIdades <= 60) {
    document.write("A turma é predominantemente jovem.");
    ("A turma é predominantemente adulta.");
} else {
    document.write("A turma é predominantemente jovem.");
    22("A turma é predominantemente idosa.");
}
27 Simule uma eleição com três candidatos e exiba o número de votos de cada um ao final.
var candidatoA = 25;
var candidatoB = 30;
var candidatorC = 45;
var totalVotos = 100;
for (var i = 0; i < totalVotos; i++) {
  var voto = Math.floor(Math.random() * 3) + 1;
  if (voto === 1) {
    candidatoA++;
  } else if (voto === 2) {
    candidatoB++;
  } else {
    candidatoC++;
  }
}
document.write("Resultados da votação:");
document.write("Candidato A:", candidatoA, "votos");
document.write("Candidato B:", candidatoB, "votos");
document.write("Candidato C:", candidatoC, "votos");
//28 Calcule o número médio de alunos por turma, considerando que cada turma tem no máximo 40 alunos.
var totalTurmas = 10;
var totalAlunos = 0;
for (var i = 1; i <= totalTurmas; i++) {
  var alunosPorTurma = Math.floor(Math.random() * 40) + 1;
  totalAlunos += alunosPorTurma;
}
var mediaAlunos = totalAlunos / totalTurmas;
document.write("A média de alunos por turma é:", mediaAlunos.toFixed(2));
//29 Calcule o valor total investido por um colecionador em CDs e o valor médio gasto em cada um.
var quantidadeCDs = 20;
var valorTotal = 0;
for (var i = 1; i <= quantidadeCDs; i++) {
  var precoCD = Math.random() * 30 + 10; 
  valorTotal += precoCD;
}
var valorMedio = valorTotal / quantidadeCDs;
document.write("Quantidade de CDs comprados:", quantidadeCDs);
document.write("Valor total investido: R$", valorTotal.toFixed(2));
document.write("Valor médio por CD: R$", valorMedio.toFixed(2));

30 Monte uma tabela de preços de 1 a 50 itens, onde cada item custa R$ 1,99, para uma loja de R$ 1,99.
31 Monte uma tabela de preços de pães para uma padaria, onde o preço do pão é informado pelo usuário.
//32 Implemente uma caixa registradora rudimentar para uma loja de conveniência.
  var valorTotal = 0;
while (true) {
  var valorProduto = parseFloat(prompt("Digite o valor do produto (ou 0 para finalizar):"));
  if (valorProduto === 0) {
    break;
  }
  valorTotal += valorProduto;
}
document.write("O valor total da compra é:", valorTotal);

//33 Informe a menor, a maior e a média das temperaturas de um conjunto indeterminado de valores.
var menorTemperatura = Infinity; 
var maiorTemperatura = -Infinity; 
var somaTemperaturas = 0;
var quantidadeTemperaturas = 0;
while (true) {
  var temperatura = parseFloat(prompt("Digite a temperatura (ou 0 para finalizar):"));
  if (temperatura === 0) {
    break;
  }
  if (temperatura < menorTemperatura) {
    menorTemperatura = temperatura;
  }
  if (temperatura > maiorTemperatura) {
    maiorTemperatura = temperatura;
  }
  somaTemperaturas += temperatura;
  quantidadeTemperaturas++;
}
var mediaTemperaturas = somaTemperaturas / quantidadeTemperaturas;
document.write("A menor temperatura é:", menorTemperatura);
document.write("A maior temperatura é:", maiorTemperatura);
document.write("A média das temperaturas é:", mediaTemperaturas);
//34 Verifique se um número é primo (com foco em criptografia).
const numero = parseInt(prompt("Digite um número para verificar se é primo:"));
if (numero <= 1) {
  document.write("O número não é primo.");
} else {
  var Primo = true;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      Primo = false;
      break;
    }
  }
  if (Primo) {
    document.write("O número é primo.");
  } else {
    document.write("O número não é primo.");
  }
}

35 Gere uma lista dos números primos entre 1 e um número fornecido pelo usuário.
36 Gere a tabuada de um número qualquer, com intervalos informados pelo usuário.
37 Calcule o mais alto, o mais baixo, o mais gordo e o mais magro cliente de uma academia e informe as médias de altura e peso.
38 Calcule o salário atual de um funcionário contratado em 1995 com aumento anual variável, baseado em seu salário inicial.
39 Realize uma estatística de acidentes de trânsito em cinco cidades e analise os resultados.
40 Exiba uma tabela de uma dívida com base em juros e número de parcelas.
