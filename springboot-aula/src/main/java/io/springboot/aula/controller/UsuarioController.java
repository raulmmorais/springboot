package io.springboot.aula.controller;

import java.util.List;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.springboot.aula.dao.UsuarioRepository;
import io.springboot.aula.entity.Usuario;

@RestController
public class UsuarioController {
	
	@Inject
	UsuarioRepository repository;

	@RequestMapping(value = "/usuario", method = RequestMethod.GET )
	public List<Usuario> listaUsuarios() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/usuario", method = RequestMethod.POST )
	public Usuario salva(@RequestBody Usuario usuario) {
		return repository.save(usuario);
	}
	
	@RequestMapping(value = "/usuario", method = RequestMethod.PUT )
	public Usuario edita(@RequestBody Usuario usuario) {
		return repository.save(usuario);
	}
	
	@RequestMapping(value = "/usuario/{id}", method = RequestMethod.DELETE )
	public void deleta(@PathVariable String id) {
		repository.deleteById(id);
	}
}
