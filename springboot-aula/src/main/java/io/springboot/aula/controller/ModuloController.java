package io.springboot.aula.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.springboot.aula.dao.ModuloRepository;
import io.springboot.aula.entity.Modulo;

@RestController
public class ModuloController {

	@Autowired
	ModuloRepository repository;

	@RequestMapping(value = "/modulo", method = RequestMethod.GET )
	public List<Modulo> listaModulos() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/modulo/obtem/{id}", method = RequestMethod.GET )
	public Optional<Modulo> obterModulo(@PathVariable String id) {
		return repository.findById(id);
	}
	
	@RequestMapping(value = "/modulo", method = RequestMethod.POST )
	public Modulo salva(@RequestBody Modulo modulo) {
		return repository.save(modulo);
	}
	
	@RequestMapping(value = "/modulo", method = RequestMethod.PUT )
	public Modulo edita(@RequestBody Modulo modulo) {
		return repository.save(modulo);
	}
	
	@RequestMapping(value = "/modulo/{id}", method = RequestMethod.DELETE )
	public void deleta(@PathVariable String id) {
		repository.deleteById(id);
	}

}
