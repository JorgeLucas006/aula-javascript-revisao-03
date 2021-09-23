/*
1)      Crie uma variável chamada “fruta”. Esta variável deve receber uma string com o nome de uma fruta.

a) Se a fruta for maçã, retorne no console: “Não vendemos esta fruta aqui”.
b) Se for kiwi, retorne: “Estamos com escassez de kiwis”.
c) Se for melancia, retorne: “Aqui está, são 3 reais o quilo”.
d) Se não for nenhum dos valores, deverá retornar uma mensagem de erro no console: Procure o administrador do sistema!
*/

var fruta = "maçã"

function loja(fruta){
  switch (fruta){
    case "maçã": 
      console.log("Não vendemos esta fruta aqui.")
      break;
    case "kiwi": 
      console.log("Estamos com escassez de kiwis.")
      break;
    case "melancia": 
      console.log("Aqui está, são 3 reais o quilo.")
      break;
    default:
      console.log("Procure o administrador do sistema!.")
      break;
  }
}

loja(fruta)
loja(fruta = "kiwi")
loja(fruta = "melancia")
loja(fruta = "")
