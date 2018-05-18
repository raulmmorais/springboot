package io.springboot.aula.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.springboot.aula.entity.Modulo;

public interface ModuloRepository extends MongoRepository<Modulo, String> {

}
