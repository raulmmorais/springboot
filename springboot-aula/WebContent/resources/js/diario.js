/**
 * 
 */
$(document).ready(function(){
	$(".datepicker").datepicker({
		format: "yyyy-mm-dd",
		autoclose: true,
	    todayHighlight: true
	})
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