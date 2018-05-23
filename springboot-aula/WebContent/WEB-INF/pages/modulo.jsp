<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="resources/css/bootstrap.min.css">
    <title>Diário</title>
  </head>
  <body>
	<div class="container">
		<nav  class="navbar navbar-expand-lg navbar-light bg-light">
			<span class="navbar-brand mb-0 h1"><a href="/aula">Pagina inicial</a></span>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a href="#" class="nav-link" id="listar">listar</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link" id="incluir">Incluir</a>
				</li>
				<li class="nav-item">
					<a href="dados_aluno" class="nav-link">Aluno</a>
				</li>
				<li class="nav-item active">
					<a href="dados_modulo" class="nav-link">Módulo</a>
				</li>
				<li class="nav-item">
					<a href="dados_diario" class="nav-link">Diário</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="container">
		<div id="conteudo">
		</div>
		<div id="form_incluir" style="display: none">
			<form id="formCadastrar">
				<div class="form-group row">
					<label for="nome" class="col-sm-1 col-form-label">Nome</label>
					<div class="col-sm-11">
						<input type='text' class="form-control" name='nome' id='nome' />
					</div>
				</div>
					<button id='salvar' type='button' class="btn btn-primary">Salvar</button>
					<button id='cancelar' type='button' class="btn btn-secondary">Cancelar</button>
			</form>
		</div>
	</div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script type="text/javascript" src="resources/js/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="resources/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="resources/js/bootstrap.bundle.min.js"></script>
	<script type="text/javascript" src="resources/js/service.js"></script>
	<script type="text/javascript" src="resources/js/modulo.js"></script>
  </body>
</html>