function validar(){
	var nome = document.forms.pesquisa.elements["nome"].value;
	var email = document.forms.pesquisa.elements["email"].value;
	var comentario = document.forms.pesquisa.elements["comentario"].value
	var mensagem = "";
	var erro = false;
	
	if(nome.length < 10){
		mensagem += "Nome menor que 10 letras. \n";
		erro = true;
	}
	if(!(email.includes('.') && email.includes('@'))){
		mensagem += "E-mail inválido: Não contém caracteres obrigatótios '@' e/ou '.'. \n";
		erro = true;
	}
	if(comentario.length < 20){
		mensagem += "Comentário inválido, menor que 20 caracteres. \n";
		erro = true;
	}
	
	if(erro){
		alert(mensagem);
	}else{
		mensagem = "Dados preenchidos corretamente!\n";
		var visita = document.forms.pesquisa.elements["visita"].value;
		
		if(visita == 'n'){
			mensagem += "Que bom que você voltou a visitar esta página!";
		}else{
			mensagem += "Volte sempre à esta página.";
		}
		alert(mensagem);
	}
	
}