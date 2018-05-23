/**
 * 
 */
var urlServico = "aluno";
	
$(document).ready(function(){
	$(".datepicker").datepicker({
		format: "yyyy-mm-dd",
		autoclose: true,
	    todayHighlight: true
	})
})

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
		listaAlunos +="			<td val='"+e.nome+"'>"+e.nome+"</td>";
		listaAlunos +="			<td val='"+dataFormatada+"'>"+dataFormatada+"</td>";
		listaAlunos += "				<td><button class='btn btn-sm btn-info' type='button' onclick='editar(\""+e.id+"\")'>Editar</button></td>";
		listaAlunos += "				<td><button class='btn btn-sm btn-danger' type='button' onclick='apagar(\""+e.id+"\")'>Apagar</button></td>";
		listaAlunos +="		</tr>";
	})
	listaAlunos +="	</tbody>";
	listaAlunos +="</table>";
	$("#conteudo").html(listaAlunos);
}
