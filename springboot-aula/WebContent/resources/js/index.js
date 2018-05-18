/**
 * 
 */
$("#listar").click(function(e){
	e.preventDefault();
	getLista();
});

$("#incluir").click(function(e){
	$("#listar").parent().removeClass("active")
	$("#incluir").parent().addClass("active")
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
	console.log("Iniciando cadastro");
	$("#conteudo").html("");
	var dataSend = {};
	$("#formCadastrar").serializeArray().map(function(x){dataSend[x.name] = x.value;});
	console.log(dataSend);
	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: "usuario",
		data: JSON.stringify(dataSend),
		dataType: 'json',
		cache: false,
		timeout: 600000,
		success: function(result){
			console.log("Adicionado" + JSON.stringify(result));
			$("#form_incluir input").each(function(i, e){
				$(e).val("")
			});
			apagaDados()
			getLista();
		},
		error: function(e){
			console.log("ERROR: ",e)
		}
	})
}

function cancelar(){
	apagaDados();
	getLista();
}

function getLista(){
	$("#listar").parent().addClass("active");
	$("#incluir").parent().removeClass("active");
	$.ajax({
		url: "usuario",
		//type: "POST",
		success: function(result){
			$("#conteudo").html("");
			tabela  = "<table class='table table-striped table-hover'>";
			tabela += "	<thead class='thead-light'>";
			tabela += "		<tr>";
			tabela += "			<th>Nome</th>";
			tabela += "			<th>Sobrenome</th>";
			tabela += "			<th>Idade</th>";
			tabela += "			<th>Editar</th>";
			tabela += "			<th>Apagar</th>";
			tabela += "		</tr>";
			tabela += "	</thead>";
			tabela += "	<tbody>";
			for(usuario in result){
				tabela += "<tr id='"+result[usuario].id+"'>";
				tabela += "<td class='nome'>"+result[usuario].nome+"</td>";
				tabela += "<td class='sobrenome'>"+result[usuario].sobrenome+"</td>";
				tabela += "<td class='idade'>"+result[usuario].idade+"</td>";
				tabela += "<td><button class='btn btn-sm btn-info' type='button' onclick='editar(\""+result[usuario].id+"\")'>Editar</button></td>";
				tabela += "<td><button class='btn btn-sm btn-danger' type='button' onclick='apagar(\""+result[usuario].id+"\")'>Apagar</button></td>";
				tabela += "</tr>";
			}
			tabela += "	</tbody>";
			tabela += "</table>";
			$("#conteudo").append(tabela);
			$("#form_incluir").hide();
		}
	});
}
function editar(usuario){
	var id = usuario;
	var nome = $("#"+usuario+" .nome").html(); 
	var sobrenome = $("#"+usuario+" .sobrenome").html();
	var idade = $("#"+usuario+" .idade").html();
	
	var campoId = "<input type='hidden' name='id' id='id'/>";
	
	$("#formCadastrar").append(campoId);
	
	$("#id").val(id);
	$("#nome").val(nome);
	$("#sobrenome").val(sobrenome);
	$("#idade").val(idade);
	
	$("#conteudo").html("");
	$("#form_incluir").show();
	
}
function apagar(usuario){
	var urlApagar = "usuario/"+usuario;
	$.ajax({
		url: urlApagar,
		type: "DELETE",
		success: function(){
			getLista();
		}
	})
}
function apagaDados(){
	$("#form_incluir input").each(function(i, e){$(e).val("")});
	$("#id").remove();
}