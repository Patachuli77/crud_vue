/**
 * @file Contiene el controlador principal de la aplicación
 * @author	Jorge Ortega <jorge77.ortega@gmail.com>
 */
import {Vista} from './vista.js'
export function VistaBusq(controlador){
	return Vue.createApp({
		data(){
			return{
				controlador:controlador,
			}
		},
		methods:{
			/**
			 * Metodo que llama al controlador para buscar 
			 */
			buscar(){

				this.texto= this.div.find('input').eq(0)
				
				this.controlador.buscar(this.texto.val())
				this.limpiar()
			},
			/**
			 * Metodo que limpia el buscador despues de la busqueda
			 */
			limpiar(){
				this.texto.val('')
			}
		}
	})
	/*constructor(controlador, div){
		super(div)
		this.controlador = controlador
		
		this.btnListar = this.div.find('button').eq(0)
		this.btnListar.click(this.buscar.bind(this))
		this.btnListar.keypress(this.buscar.bind(this))
		
	}*/
}