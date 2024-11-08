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


5- Supondo que a população de um país A seja de 80.000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja de 200.000 habitantes com uma taxa de crescimento de 1,5%. 
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
document.write("O número de anos necessários para que a população de A ultrapasse ou iguale a população de B é de:", anos + " anos.");


6- Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

var paisA = parseFloat(prompt("Informe a quantidade de habitantes do país A."))
var txCrescA = parseFloat(prompt("Informe a taxa de crescimento anual dos habitantes do país A."))
var paisB = parseFloat(prompt("Informe a quantidade de habitantes do país B."))
var txCrescB = parseFloat(prompt("Informe a taxa de crescimento anual dos habitantes do país B."))
var anos = 0
while(paisA < paisB) {
  paisA += paisA * txCrescA;
  paisB += paisB * txCrescB;
  anos++;
}
document.write("O número de anos necessários para que a população de A ultrapasse ou iguale a população de B é de: ", anos + " anos.");


