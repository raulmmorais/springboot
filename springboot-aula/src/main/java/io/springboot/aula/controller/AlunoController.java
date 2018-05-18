package io.springboot.aula.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.springboot.aula.dao.AlunoRepository;
import io.springboot.aula.entity.Aluno;

@RestController
public class AlunoController {

	@Autowired
	AlunoRepository repository;

	@RequestMapping(value = "/aluno", method = RequestMethod.GET )
	public List<Aluno> listaAlunos() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/aluno", method = RequestMethod.POST )
	public Aluno salva(@RequestBody Aluno aluno) {
		return repository.save(aluno);
	}
	
	@RequestMapping(value = "/aluno", method = RequestMethod.PUT )
	public Aluno edita(@RequestBody Aluno aluno) {
		return repository.save(aluno);
	}
	
	@RequestMapping(value = "/aluno/{id}", method = RequestMethod.DELETE )
	public void deleta(@PathVariable String id) {
		repository.deleteById(id);
	}
	
}
