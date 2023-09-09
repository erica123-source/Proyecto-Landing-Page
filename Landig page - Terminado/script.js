function validarDatos(){

  $("#msgnombre").text("");
  $("#msgapellido").text("");
  $("#msgemail").text("");

  
  let nombre = $("#nombre").val();
  let apellido = $("#apellido").val();
  let email = $("#email").val();
    
  if(nombre == "") {
      $("#msgnombre").text("Complete este campo");
   }
    
  if(apellido == "") {
      $("#msgapellido").text("Complete este campo");
   }

  if(email == "") {
      $("#msgemail").text("Complete este campo");
   }
  
  
}
