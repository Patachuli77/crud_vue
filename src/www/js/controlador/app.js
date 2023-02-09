/**
 * @file Contiene el controlador principal de la aplicación
 * @author	Jorge Ortega <jorge77.ortega@gmail.com>
 */

import {Modelo} from '../modelo/modelo.js'

import {VistaList} from '../vistas/vistalista.js'
import {VistaAlta} from '../vistas/vistaalta.js'
import{VistaEdit} from '../vistas/vistaedit.js'
import {VistaHead} from '../vistas/vistahead.js'
import {VistaCons} from '../vistas/vistacons.js'
import{VistaBusq} from '../vistas/vistabusq.js'

class Controlador{
	/**
	 * Constructor de la clase
	 */
	constructor(){
		window.onload = this.iniciar.bind(this)
	}
	/**
	 * Inicializa la aplicaion
	 */
	iniciar(){
		this.modelo = new Modelo()
		
		this.vistaHead = new VistaHead(this).mount('#header')
		this.mainList = new VistaList(this).mount('#listado')
		this.mainEdit = new VistaEdit(this).mount('#edicion')
		this.mainAlta = new VistaAlta(this).mount('#alta')
        this.mainCons = new VistaCons(this).mount('#consulta')
		this.mainBusq = new VistaBusq(this).mount('#busqueda')
		
		this.mainList.ver(true)
		
	}
	descubrir(){
		this.vistaHead.descubrir()
	}	
	/**
	 * Metodo que muestra la vista de listar
	 */
	pulsarHeadList(){
		this.listar()
		this.mainList.ver(true)
		
		this.mainEdit.ver(false)
		this.mainAlta.ver(false)
        this.mainCons.ver(false)
		this.mainBusq.ver(false)
	}
	/**
	 * Metodo que muesta la vista de la edicion
	 */
	pulsarHeadEdit(){
		this.mainList.ver(false)
		this.mainEdit.ver(true)
		this.mainAlta.ver(false)
        this.mainCons.ver(false)
		this.mainBusq.ver(false)
	}
	/**
	 * Metodo que muestra la vista del alta
	 */
	pulsarHeadAlta(){
		//this.mainAlta.limpiar()
		this.mainList.ver(false)
		this.mainEdit.ver(false)
		this.mainAlta.ver(true)
        this.mainCons.ver(false)
		this.mainBusq.ver(false)
	}
    /**
	 * Metodo que muestra la vista de la consulta de datos
	 */
	pulsarHeadCons(){
		
		this.mainList.ver(false)
		this.mainEdit.ver(false)
		this.mainAlta.ver(false)
        this.mainCons.ver(true)
		this.mainBusq.ver(false)
		
	}
	/**
	 * Metodo que muestra la vista de buscar
	 */
	pulsarBuscar(){
		this.mainList.ver(false)
		this.mainEdit.ver(false)
		this.mainAlta.ver(false)
        this.mainCons.ver(false)
		this.mainBusq.ver(true)
	}
	/**
	 * Metodo que llama al modelo para insertar datos en el indexed
	 * @param {Object} objeto 
	 */
	insertar(objeto){
		this.modelo.insertar(objeto, this.insertarOK.bind(this))	
	}
	/**
	 * Callback del metodo insertar
	 */
	insertarOK(){
		console.log('La inserción ha ido bien')
	}

	/**
	 * Metodo que llama al modelo para listar
	 */
	listar(){
		this.modelo.listar(this.listarOK.bind(this))	
	}
	/**
	 * Callback del metodo listar, llama a la vista para visualizar la lista de objetos
	 * @param {array} lista 
	 */
	listarOK(lista){
		this.mainList.generarLista(lista)
	}
	/**
	 * Metodo que llama al modelo para consultar los datos de un articulo
	 * @param {string} id 
	 */
	pulsarRopa(id){
		this.modelo.consultar(id,this.consultaPrenda.bind(this))
	}/**
	 * Metodo que visualiza los datos de la consulta en la vista editar y en la vista consulta
	 * @param {Object} ropa 
	 */
	consultaPrenda(ropa){
		this.mainEdit.mostrarDatos(ropa)
		this.mainCons.mostrarDatos(ropa)
		this.pulsarHeadCons()
	}
	/**
	 * Metodo que llama al modelo para buscar por el nombre a un objeto
	 * @param {string} texto 
	 */
	buscar(texto){
		this.modelo.buscar(texto,this.listarOK.bind(this))	
		this.pulsarHeadList()
	}
	/**
	 * Metodo que llama al modelo para eliminar un objeto
	 * @param {string} id 
	 */
	borrado(id){
		this.modelo.eliminar(id,this.listar.bind(this))
		this.pulsarHeadList()
	}
	/**
	 * Metodo que llama al modelo para guardar un cambio a un objeto
	 * @param {string} id 
	 * @param {object} ropa 
	 */
	guardar(id,ropa){
		this.modelo.guardar(id,ropa,this.listar.bind(this,this.listarOK.bind(this)))
		this.pulsarHeadList()
	}
}

const app = new Controlador()