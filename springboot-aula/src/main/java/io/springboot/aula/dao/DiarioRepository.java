package io.springboot.aula.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.springboot.aula.entity.Aluno;
import io.springboot.aula.entity.Diario;
import io.springboot.aula.entity.Modulo;

public interface DiarioRepository extends MongoRepository<Diario, String> {

	List<Diario> findByAluno (Aluno aluno);
	
	List<Diario> findByModulo(Modulo modulo);
	
	List<Diario> findByDataBetween(Date dataDe, Date dataAte);
}
