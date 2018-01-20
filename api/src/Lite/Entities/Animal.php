<?php
namespace SimplesVet\Lite\Entities;

class Animal
{
	private $ani_int_codigo;
	private $ani_var_nome;
	private $ani_cha_vivo;
	private $ani_dec_peso;
	private $ani_var_raca;

	public function getCodigo() 
	{
		return $this->ani_int_codigo;
	}

	public function setCodigo($codigo) 
	{
		$this->ani_int_codigo = $codigo;
	}

	public function getNome() 
	{
		return $this->ani_var_nome;
	}

	public function setNome($nome) 
	{
		$this->ani_var_nome = $nome;
	}

	public function getVivo() 
	{
		return $this->ani_cha_vivo;
	}

	public function setVivo($vivo) 
	{
		$this->ani_cha_vivo = $vivo;
	}

	public function getPeso() 
	{
		return $this->ani_dec_peso;
	}

	public function setPeso($peso) 
	{
		$this->ani_dec_peso = $peso;
	}

	public function getRaca() 
	{
		return $this->ani_var_raca;
	}

	public function setRaca($raca) 
	{
		$this->ani_var_raca = $raca;
	}
}