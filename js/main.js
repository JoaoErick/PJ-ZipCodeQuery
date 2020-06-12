//alert("Funcionou");

//Requisição ajax utilizando a biblioteca JQuery
function consultaCep(){
    $("#mensagem-sucesso").hide();
    $("#mensagem-erro").hide();
    $(".cep").hide();
    $(".barra-progresso").show();

    var cep = document.getElementById("cep").value;
    if(cep.length <= 7){
        $("#mensagem-erro").show();
    }
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            /* //alert(response.logradouro);

            $("#logradouro").html(response.logradouro); //Faz o mesmo que a linha 16 só que em JQuery
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf; */
            
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);

            $("#mensagem-sucesso").show();
            $(".cep").show();
            $(".barra-progresso").hide();
        }

    })
}

//Assim que a página for carregada.
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
    $("#mensagem-sucesso").hide();
    $("#mensagem-erro").hide();
})
