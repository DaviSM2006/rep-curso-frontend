
        // E -> P -> S

        function soma(n1, n2)
        {
           var resultado = n1 + n2
           return resultado;
        }

        soma(2, 3);

        function oi()
        {
             var valor = texto.value;
             mensagem.innerText = valor;
        }
        function maiusculas()
        {
            var valor = texto.value;
            mensagem.innerText = valor.toUpperCase();
        }
        function letragem()
        {
            var valor = texto.value;
            var primeira = valor.charAt(0);
            var resto = valor.substring(1);

            mensagem.innerText = primeira.toUpperCase() + resto.toLowerCase();
        }
        function convert()
        {
            var fahren = texto.value;
            var celcius = mensagem.innerText;
            var celcius =  (5*(fahren-32)/9);
            mensagem.innerText = celcius
        }
        function somar()
        {
            var resultado = parseInt(num1.value) + parseInt(num2.value);
            mensagem.innerText = resultado;

        } 
        function subtrair()
        {
            var resultadosub = parseInt(num1.value) - parseInt(num2.value);
            mensagem.innerText = resultadosub;
        }
        function dividir()
        {
            var resultadodiv = parseInt(num1.value)/parseInt(num2.value);
            mensagem.innerText = resultadodiv;
        }
        function multi()
        {
            var resultadomulti = parseInt(num1.value)*parseInt(num2.value);
            mensagem.innerText = resultadomulti;
        }
        function vogal()
        {
        if ( texto.value == "a" || texto.value == "e" || texto.value == "i" || texto.value =="o" || texto.value == "u"){
            mensagem.innerText = "vogal";}
        else {
            mensagem.innerText = "consoante";
        }
        }