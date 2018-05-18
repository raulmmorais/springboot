/**
 * 
 */
package io.springboot.aula.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author raul.morais
 *
 */
//@RestController
@Controller
public class IndexController {

	/*
	@RequestMapping(value = "/", method = RequestMethod.GET )
	public String inicio() {
		return "Ola Mundo!";
	}
	@RequestMapping(value = "/nome/{nome}", method = RequestMethod.GET )
	public String inicio(@PathVariable String nome) {
		return "Ola " +nome;
	}
	*/
	@RequestMapping(value="/")
	public String index() {
		System.out.println("Pagina inicial");
		return "WEB-INF/pages/index.jsp";
	}
	
	@RequestMapping(value="/dados_diario")
	public String diario() {
		System.out.println("Pagina diário");
		return "WEB-INF/pages/diario.jsp";
	}
	
	@RequestMapping(value="/dados_aluno")
	public String aluno() {
		System.out.println("Pagina aluno");
		return "WEB-INF/pages/aluno.jsp";
	}
	
	@RequestMapping(value="/dados_modulo")
	public String modulo() {
		System.out.println("Pagina modulo");
		return "WEB-INF/pages/modulo.jsp";
	}
}
