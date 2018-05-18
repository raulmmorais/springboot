package io.springboot.aula.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import io.springboot.aula.entity.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {

}
