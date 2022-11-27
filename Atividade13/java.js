function alterar(){
	var select_formato = document.getElementsByName('caixa');
	var formato = "";
	var caixa = "";
	
	for (var i = 0; i < select_formato.length; i++){
		if(select_formato[i].checked){
			formato = select_formato[i].value;
		}
	}
	switch(formato){
		case 'alta':
			caixa = document.querySelector('#insert').value.toUpperCase();
			break;
			
		case 'baixa':
			caixa = document.querySelector('#insert').value.toLowerCase();
			break;		
	}
	document.querySelector("[id='insert']").value = caixa;
}