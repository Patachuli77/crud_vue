/**
 * @file Contiene el controlador principal de la aplicación
 * @author	Jorge Ortega <jorge77.ortega@gmail.com>
 */
import {Vista} from './vista.js'
export function VistaCons(controlador){
	return Vue.createApp({
		data(){
			return{
				controlador:controlador,
				mostrar: 'none',
				objeto:{
					nombre:null,
					talla: null,
					diaComprado: null,
					descripcion: null,
					tipo: null,
					estacion: null,
				},
			}
		},
		template:`
				<div id="formularios" :class=mostrar>
					<label>Foto de la prenda</label>
					<img src="../../src/www/assets/imagenes/camiseta1.jpg">
					<label>Nombre</label>
					<h3>{{objeto.nombre}}</h3>
					<label>Talla</label>
					<h3>{{objeto.talla}}</h3>
					<label>Dia comprado</label>
					<h3>{{objeto.diaComprado}}</h3>
					<label>Descripcion</label>
					<p>{{objeto.descripcion}}</p>
					<label>Tipo</label>
					<h3>{{objeto.tipo}}</h3>
					<label>Estacion</label>
					<h3>{{objeto.estacion}}</h2>
				</div>
				<div class="botones" :class=mostrar>
					<a><span role="button" id="volver" tabindex="10000005" @click=volver>Volver</span></a>
					<a><span role="button" id="editar" tabindex="10000006" @click=modificar>Editar</span></a>
				</div>  
			<div>
		`, 
		methods:{
			/**
			 * Metodo que mete los datos del objeto dentro de su sitio en la vista para poder visualizarlos
			 * @param {object} ropa 
			 */
			mostrarDatos(ropa){
				
				let cadena = ''
				if(ropa.estacion[0]==true){
					cadena+='Primavera, '}
				if(ropa.estacion[1]==true){
					cadena+='Verano, '}
				if(ropa.estacion[2]==true){
					cadena+='Otoño, '}
				if(ropa.estacion[3]==true){
					cadena+='Invierno, '}
				cadena = cadena.substring(0, cadena.length - 2)

				
				
				this.objeto.nombre = ropa.nombre
				this.objeto.talla = ropa.talla
				this.objeto.diaComprado = ropa.diaComprado
				this.objeto.descripcion = ropa.descripcion
				this.objeto.tipo = ropa.tipo
				this.objeto.estacion = cadena
			},/**
			* Metodo para cambiar a la vista de editar
			*/
			modificar(){
				this.controlador.pulsarHeadEdit()
			},/**
			* Metodo para volver a la vista principal
			*/
			volver(){
				this.controlador.pulsarHeadList()
			},
			ver(ver){
				if(ver)
					this.mostrar = 'flex'
				else
				this.mostrar ='none'
			}
		}
	})
	/*constructor(controlador, div){
		super(div)
		this.controlador = controlador
		
		this.btnEditar = this.div.find('a').eq(1)
		this.btnEditar.click(this.modificar.bind(this))
		this.btnEditar.keypress(this.modificar.bind(this))

		this.btnVolver = this.div.find('a').eq(0)
		this.btnVolver.click(this.volver.bind(this))
		this.btnVolver.keypress(this.volver.bind(this))
	}*/
}
