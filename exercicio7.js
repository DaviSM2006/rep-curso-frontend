function fatorial()
{
    var num = valor.value;
    var fim = 1;
    var total = 1;

    while ( num >= fim )
    {
        
        total *= num;
        // total = total * num; isso e igual acima

        //num = num -1; isso e igual abaixo 
        num -= 1;
    }

        console.log(total);
    
}
//pedir notas
//mostrar a media
//dizer se
//>= 4 <= 7 -> recuperacao
// < 4 -> reprovado
// > 7 -> aprovado
function notas()
{
    var media = 0;

    for (var ini = 1; ini <= 4; ini += 1)
    {
        var nota = prompt("digite o valor da nota " + ini);
        media += parseInt(nota);

    console.log("A media = " + media/4);
}
}

//fibonacci
// 0 1 1 2 3 5 8
// vai dizer numeros da sequencia
// 8 -> 0 1 1 2 3 4 5 8 13
function fibo()
{
    var num = valor.value;
    var n1 = 0;
    var n2 = 1;

    if (num >= 2){
        console.log(n1);
        console.log(n2);
    } else if (num == 1)
        console.log(n1);
    console.log(n1);
    console.log(n2);
    
    while(num > 2)
        {
            var n3 = n1 + n2;

            console.log(n3);
            n1 = n2;
            n2 = n3;
        num--;

    }

    
}
