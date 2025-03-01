$(document).ready(function(){

    $("#bt-cadastrar").click(function(){
   
     var nome = $("#nome").val()
     var telefone = $("#telefone").val()
     var email = $("#email").val()
     var cidade = $("#cidade").val()
     var estado = $("#estado").val()
     var sexo = $("[name=sexo]:checked").val();
     console.log(estado)

     $("input, select").removeClass("is-invalid")
     
     if( nome.trim().length <= 2){
        $("#nome").addClass("is-invalid")
     }
     if( telefone.trim() == ""){
        $("#telefone").addClass("is-invalid")
   }
     if( email.trim() == ""){
        $("#email").addClass("is-invalid")
     }
     if( cidade.trim() == ""){
        $("#cidade").addClass("is-invalid")
   }
     if( estado == "Selecione"){
        $("#estado").addClass("is-invalid")
     }
     if( sexo == undefined){
        $("[name=sexo]").addClass("is-invalid")
     }

    });//fim do bt-cadastrar

    $("#telefone").keydown(function(ev){

        var kd = $("#telefone").keydown.value
        if (ev.keyCode < 48 || ev.keyCode > 57 && ev.keyCode != 45 && ev.keyCode != 8 ){
            console.log(ev.key);      
            return false;
        }


    }); // fim do keydown

    
});