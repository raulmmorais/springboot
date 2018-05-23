/**
 * 
 */

$("#salvar").click(function(){
	salvar();
});
$("#cancelar").click(function(){
	cancelar();
});

$("#listar").click(function(e){
	e.preventDefault();
	getLista();
});

$("#incluir").click(function(e){
	e.preventDefault();
	$("#conteudo").html("");
	$("#listar").parent().removeClass("active");
	$("#incluir").parent().addClass("active");
	$("#form_incluir").show();
	
});

function salvar(){
	console.log("Incluindo objeto")
	var dados = {};
	$("#formCadastrar").serializeArray().map(function(x){dados[x.name] = x.value;});
	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: urlServico,
		data: JSON.stringify(dados),
		dataType: 'json',
		cache: false,
		success: function(result){
			console.log("Adicionado" + JSON.stringify(result));
			getLista();
		},
		error: function(e){
			console.log("ERROR: ",e)
		}
	});
	apagaDadosForm();
}
function getLista(){
	console.log("Obtendo Lista")
	$("#listar").parent().addClass("active");
	$("#incluir").parent().removeClass("active");
	
	$.get(urlServico, function(data){listar(data)});
	$("#form_incluir").hide();
}

function cancelar(){
	getLista();
	apagaDadosForm();
}


function apagaDadosForm(){
	$("#form_incluir input").each(function(i, e){$(e).val("")});
	$("#id").remove();
}

function apagar(id){
	var urlApagar = urlServico+"/"+id;
	$.ajax({
		url: urlApagar,
		type: "DELETE",
		success: function(){
			getLista();
		}
	})
}
function editar(id){
	console.log(id);
	var campoId = "<input type='hidden' name='id' id='id' value='"+id+"'/>";
	$("#"+id+" td[val]").each(function(i, e){
		$("#formCadastrar input").eq(i).val($(e).html())
	})
	$("#formCadastrar").append(campoId);
	
	$("#conteudo").html("");
	$("#form_incluir").show();
}