/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

type People = { 
	nome: string, 
	idade: number,
  cor: string
};

enum Cor {
  VERDE = "Verde",
  AZUL = "Azul",
  VERMELHO = "Vermelho"
}

const peopleOne:People = {
  nome: "Marcelo",
	idade: 49,
  cor: Cor.VERMELHO,
}
const peopleTwo:People = {
  nome: "Silmara",
	idade: 42,
  cor: Cor.AZUL,
}
const peopleThree:People = {
  nome: "Gisela",
	idade: 20,
  cor: Cor.VERDE,
}

// console.table(peopleOne)
// console.table(peopleTwo)
// console.table(peopleThree)
console.table([peopleOne,peopleTwo,peopleThree])
