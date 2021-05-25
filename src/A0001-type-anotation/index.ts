/* eslint-disable */
let nome: string = 'jao';
let idade: number = 19;
let adulto: boolean = true;
let simvulo: symbol = Symbol('qualquer coisa');
//let big: bigint = 10,;

//Array
let araynumbers: Array<number> = [1, 2, 3, 4, 5];

//Object
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: "Joao",
  idade: 12
};

console.log(pessoa.nome);

//funcoes
function sum (x: number, y: number): number{
  return x+y;
}

const sum2: (x: number, y: number)=> number = (x, y) => x+y;
