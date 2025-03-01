function mudar()
{
    var nova = $("#cor").val();
    $(".titulo").css("color", cor);
}

function add()
{
    var cidade = $("#cidade").val();
            var primeira = cidade.charAt(0);
            var resto = cidade.substring(1);
            mensagem.innerText = primeira.toUpperCase() + resto.toLowerCase();


    if ($("lista").html().includes(nova) == true)
        {

       alert("cidade ja cadastrada");

    } else {
        $("#lista").append("<li>" + nova + "</li>");
    }
}

$(document).ready(function(){

//add um evento
$(".bt-add").click(add);

$(".titulo").css("color", "red");   

$("h1").click(function(){
    var nova = $("#cor").val();
    $(this).css("color", nova)
});
})




