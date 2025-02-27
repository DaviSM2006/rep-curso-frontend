function mudar()
{
    var cor = $("#cor").val();
    $(".titulo").css("color", cor);
}

function add()
{
    var cidade = $("#cidade").val();
    $("#lista").append("<li>" + cidade + "</li>");
}