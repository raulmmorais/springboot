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
	$("#listar").parent().removeClass("active");
	$("#incluir").parent().addClass("active");
	$("#form_incluir").show();
	
});

$("#salvar").click(function(){
	salvar();
});
$("#cancelar").click(function(){
	cancelar();
});

function salvar(){
	console.log("Incluindo aluno")
	var dados = {};
	$("#formCadastrar").serializeArray().map(function(x){dados[x.name] = x.value;});
	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: "aluno",
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
	
	$.get("aluno", function(data){listar(data)});
	$("#form_incluir").hide();
}

function cancelar(){
	getLista();
	apagaDadosForm();
}

function listar(data){
	//console.log(JSON.stringify(data));
	$("#conteudo").html("");
	var listaAlunos = "";
	listaAlunos +="<table class='table table-striped table-hover table-bordered'>";
	listaAlunos +="	<thead class='thead-light'>";
	listaAlunos +="		<tr>";
	listaAlunos +="			<th>#</th>";
	listaAlunos +="			<th>Nome</th>";
	listaAlunos +="			<th>Data de Nascimento</th>";
	listaAlunos +="			<th>Editar</th>";
	listaAlunos +="			<th>Apagar</th>";
	listaAlunos +="		</tr>";
	listaAlunos +="	</thead>";
	listaAlunos +="	<tbody>";
	$(data).each(function(i, e){
		console.log("- "+i+" - "+e.nome)
		var datanascimento = new Date(e.dtNascimento);
		var dia = datanascimento.getDate()+1;
		if(dia < 10){
			dia = "0"+dia;
		}
		var mes = datanascimento.getMonth()+1;
		if(mes < 10){
			mes = "0"+mes;
		}
		var dataFormatada = datanascimento.getFullYear()+"-"+mes+"-"+dia;
		console.log(dataFormatada)
		listaAlunos +="		<tr id='"+e.id+"'>";
		listaAlunos +="			<td>"+i+"</td>";
		listaAlunos +="			<td>"+e.nome+"</td>";
		listaAlunos +="			<td>"+dataFormatada+"</td>";
		listaAlunos += "				<td><button class='btn btn-sm btn-info' type='button' onclick='editar(\""+e.id+"\")'>Editar</button></td>";
		listaAlunos += "				<td><button class='btn btn-sm btn-danger' type='button' onclick='apagar(\""+e.id+"\")'>Apagar</button></td>";
		listaAlunos +="		</tr>";
	})
	listaAlunos +="	</tbody>";
	listaAlunos +="</table>";
	$("#conteudo").html(listaAlunos);
}

function apagaDadosForm(){
	$("#form_incluir input").each(function(i, e){$(e).val("")});
	$("#id").remove();
}

function editar(id){
	console.log(id);
}

function apagar(id){
	var urlApagar = "aluno/"+id;
	$.ajax({
		url: urlApagar,
		type: "DELETE",
		success: function(){
			getLista();
		}
	})
}