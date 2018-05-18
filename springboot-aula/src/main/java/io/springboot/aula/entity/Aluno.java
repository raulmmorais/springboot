package io.springboot.aula.entity;

import java.util.Date;

public class Aluno extends EntidadeGenerica {

	private String nome;
	private Date dtNascimento;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Date getDtNascimento() {
		return dtNascimento;
	}
	public void setDtNascimento(Date dtNascimento) {
		this.dtNascimento = dtNascimento;
	}
}
