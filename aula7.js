
var cidade = "Curitiba";
var cidade2 = "Pinhais";

// lista -> vetores -> array
var cidades = ["Curitiba", "Pinhais", "Araucaria"];

// add item no vetor - *push add no inicio. *unshift add no fim.
cidades.push("Colombo");

// remover curitiba *array 0*
// cidades.shift();

// apaga pinhais *array 1
// cidades.splice(1, 1);

// cidades[1] = "Piraquara";


// loops -> repeticao

var ini = 0;
var fim = cidades.length -1;

while (ini <= fim)
{
    console.log(cidades[ini]);

    ini = ini + 1;
}



for (var ini = 0; ini <= fim; ini = ini + 1)
{
    console.log(cidades[ini]);
}

// imprimir na ordem inversa *do ultimo para o primeiro valor da array.

var ini = cidades.length - 1; 
var fim = 0;

while (ini >= fim)
{
    console.log(cidades[ini]);
    ini = ini - 1;
}





var n1 = 2;
var n2 = 3;
var n3 = 8;


function soma(n1,n2)
{
    var resultado = n1 + n2 + n3;
    return resultado;
}

var val = soma(3,5);

console.log(val);