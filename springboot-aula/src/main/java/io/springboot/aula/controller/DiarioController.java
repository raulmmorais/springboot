package io.springboot.aula.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.springboot.aula.dao.AlunoRepository;
import io.springboot.aula.dao.DiarioRepository;
import io.springboot.aula.dao.ModuloRepository;
import io.springboot.aula.entity.Aluno;
import io.springboot.aula.entity.Diario;
import io.springboot.aula.entity.Modulo;

@RestController
public class DiarioController {

	@Autowired
	DiarioRepository repository;
	
	@Autowired
	AlunoRepository alunoRepository;
	
	@Autowired
	ModuloRepository moduloRepository;

	@RequestMapping(value = "/diario", method = RequestMethod.GET )
	public List<Diario> listaDiarios() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/diario/aluno/{idAluno}", method = RequestMethod.GET)
	public List<Diario> findByAluno(@PathVariable String idAluno){
		
		Optional<Aluno> aluno = alunoRepository.findById(idAluno);
		
		return repository.findByAluno(aluno.get());
	}
	
	@RequestMapping(value = "/diario/modulo/{idModulo}", method = RequestMethod.GET)
	public List<Diario> findByModulo(@PathVariable String idModulo){
		Optional<Modulo> modulo = moduloRepository.findById(idModulo);
		
		return repository.findByModulo(modulo.get());
	}
	
	@RequestMapping(value = "/diario/{de}/{ate}", method = RequestMethod.GET)
	public List<Diario> list(@PathVariable String de, @PathVariable String ate) throws ParseException{
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		Date dataDe = dateFormat.parse(de);
		Date dataAte = dateFormat.parse(ate);
		
		return repository.findByDataBetween(dataDe, dataAte);
		
	}
	
	@RequestMapping(value = "/diario", method = RequestMethod.POST )
	public Diario salva(@RequestBody Diario diario) {
		return repository.save(diario);
	}
	
	@RequestMapping(value = "/diario", method = RequestMethod.PUT )
	public Diario edita(@RequestBody Diario diario) {
		return repository.save(diario);
	}
	
	@RequestMapping(value = "/diario/{id}", method = RequestMethod.DELETE )
	public void deleta(@PathVariable String id) {
		repository.deleteById(id);
	}

}
