package io.springboot.aula.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.springboot.aula.entity.Aluno;

public interface AlunoRepository extends MongoRepository<Aluno, String> {

}
