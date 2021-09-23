/*
2) As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores. Criar variáveis que tenham o salário do colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

a) Salários até R$ 280,00 (incluindo) : aumento de 20%
b) Salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
c) Salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
d) Salários de R$ 1500,00 em diante : aumento de 5%

Após o aumento ser realizado, informe no console:

● O salário antes do reajuste;
● O percentual de aumento aplicado;
● O valor do aumento;
● O novo salário, após o aumento.
*/

function tabajara(sal){
  let reajuste = sal;
  if(sal <= 280){
    reajuste = sal * 1.20;
  }else if (sal > 280 && sal < 700){
    reajuste = sal * 1.15;
  }else if (sal >= 700 && sal < 1500){
    reajuste = sal * 1.10;
  }else if (sal >= 1500){
    reajuste = sal * 1.05;
  }

  return console.log("Salário antigo: "+sal+
                     "\nReajuste: "+reajuste+
                     "\nPercentual de aumento: "+(reajuste/sal)+
                     "\nValor do aumento: "+(reajuste-sal));
}

var salario = 1000

tabajara(salario);