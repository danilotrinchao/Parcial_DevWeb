$(document).ready(function () {
  $(".mostrar-dados").click(function () {
    var nome = $("#nome").val();
    var cpf = $("#cpf").val();
    var data = $("#data").val();

    event.preventDefault();
    $("#exibe-nome").html(nome);
    $("#exibe-cpf").html(cpf);
    $("#exibe-data").html(data);
  });

  if ($("#password") == "") {
    $("#password").val("Password");
   
  }
  else{
    $(".mostrar-senha").click(function () {
     let e = $("#password").attr("type", "text");     
      alert(e);
    });
  }
}); // fim $(document).ready(function(){

