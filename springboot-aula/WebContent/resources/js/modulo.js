/**
 * 
 */
$(document).ready(function(){
})

$("#listar").click(function(e){
	e.preventDefault();
	getLista();
});

$("#incluir").click(function(e){
	e.preventDefault();
	$("#conteudo").html("");
	$("#form_incluir").show();
	
});

$("#salvar").click(function(){
	salvar();
});
$("#cancelar").click(function(){
	cancelar();
});

function salvar(){
	
}

function getLista(){
	
}

function cancelar(){
	
}