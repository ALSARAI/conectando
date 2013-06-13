function LoginConectar(U,P)
{
	//una cadena de get, una variable
	datos="usuario="+U+ "& password="+P ;
	//permite comunicarce con el servidor y resive una respuesta
	$.ajax({
		type:"POST",
		//envia por POST
		url:"192.168.1.177/sitio6/Log_in_m.php",
		//se le indica que es lo que se enviara
		data:  datos
	}).done(function(msg){
		alert(msg);
		if(msg=="" || msg==null)
		{alert("usuario correcto");}
		else
		{alert("Bienvenido");}
		});//function msg
	 }//function
$(document).ready(function(e) {
	document.addEventListener("decive ready", function(){
		$('.Enviar').tap(function(){
			var formulario= $(this).parents('form');
			var usuario= formulario.children('input:eq(0)').val();
			var Password= fomulario.children('input:eq(0)').val();
			LoginConectar(usuario,password);
	  
    });//tap
  });//decive ready
});//ready