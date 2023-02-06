/**
 * @file Contiene el controlador principal de la aplicación
 * @author	Jorge Ortega <jorge77.ortega@gmail.com>
 */
export function VistaHead(controlador){
	return Vue.createApp({
		data(){
			return{
				controlador:controlador,
				//aListar : head.getElementsByTagName('a')[0]
			}
		},
			template: `
				<a class="logo" role="button" @click=pulsarLista tabindex="2"><img src="../../src/www/assets/imagenes/logo.svg" alt="logo empresa"></a>
				<div role="button" @click=pulsarBuscar tabindex="3" class="resaltado">
					<h1>Buscar Prendas</h1>
				</div>
				<div role="button" @click=pulsarAlta tabindex="4" class="resaltado">
					<h1>Añadir Prendas</h1>
				</div>
			` ,
		methods:{
		/**
		 * Metodo que llama al controlador para cambiar la vista a listar
		 */
		pulsarLista(){
			this.controlador.pulsarHeadList()
			
		},/**
		 * Metodo que llama al controlador para cambiar la vista al alta
		 */
		pulsarAlta(){
			this.controlador.pulsarHeadAlta()
			
		},
		/**
		 * Metodo que llama al controlador para cambiar la vista a buscar
		 * 
		 */
		pulsarBuscar(){
			this.controlador.pulsarBuscar()
		}
		}
	})
}