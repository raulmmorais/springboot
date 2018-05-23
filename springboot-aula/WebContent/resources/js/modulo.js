/**
 * 
 */
var urlServico = "modulo";
$(document).ready(function(){
})

function listar(data){
	$("#conteudo").html("");
	var lista = "";
	lista +="<table class='table table-striped table-hover table-bordered'>";
	lista +="	<thead class='thead-light'>";
	lista +="		<tr>";
	lista +="			<th>#</th>";
	lista +="			<th>Nome</th>";
	lista +="			<th>Editar</th>";
	lista +="			<th>Apagar</th>";
	lista +="		</tr>";
	lista +="	</thead>";
	lista +="	<tbody>";
	$(data).each(function(i, e){
		lista +="		<tr id='"+e.id+"'>";
		lista +="			<td>"+i+"</td>";
		lista +="			<td class='nome' val='"+e.nome+"'>"+e.nome+"</td>";
		lista += "				<td><button class='btn btn-sm btn-info' type='button' onclick='editar(\""+e.id+"\")'>Editar</button></td>";
		lista += "				<td><button class='btn btn-sm btn-danger' type='button' onclick='apagar(\""+e.id+"\")'>Apagar</button></td>";
		lista +="		</tr>";
	})
	lista +="	</tbody>";
	lista +="</table>";
	$("#conteudo").html(lista);
}