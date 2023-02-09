/**
 * @file Contiene el controlador principal de la aplicación
 * @author	Jorge Ortega <jorge77.ortega@gmail.com>
 */
import {Vista} from './vista.js'
export function VistaList(controlador){
	return Vue.createApp({
		data(){
			return{
				controlador: controlador,
				lista: [],
				mostrar1: 'flex',
				mostrar2: 'none',
				mostrar: 'block',
			}
		},	
		template:`<div :class=mostrar>
						<div id="inicio" :class=mostrar1>
						<h1>Bienvenido a tu armario virtual</h1>
						<h2>Presiona el boton para comenzar</h2>
						<button tabindex="1" @click=listar>Empezar</button>
						</div>
						<div id="gridRopa" :class=mostrar2>
							<div class="cajaRopa" v-for="ropa in lista"  @click=pulsarCaja(ropa.id)>
								<p class="oculto">{{ropa.id}}</p>
								<img src="../../src/www/assets/imagenes/camiseta1.jpg">
								<h3>{{ropa.nombre}}</h3>
							</div>
						</div>
					<div>`,
		methods:{
			/**
			 * Metodo que elimina la fachada de carga inicial y cambia a la vista normal
			 */
			listar(){
				this.mostrar1= 'none'
				this.mostrar2 = 'flex'
				this.controlador.descubrir()
				
				this.controlador.listar()
			},
			/**
			 * Metodo que genera la estructura de la lista y la mete en la vista
			 * @param {array} lista 
			 */
			generarLista(ropas){
				this.lista=ropas
			},
			/**
			* Metodo que indica al controlador que se ha pulsado una caja
			* @param {string} id 
			*/	
			pulsarCaja(id){
				console.log("bien")
				this.controlador.pulsarRopa(id)
			},
			ver(ver){
				if(ver){
					this.mostrar='block'
				}
				else{
					
					this.mostrar='none'
				}
			}

		}
	})
	
}
/*constructor(controlador, div){
		super(div)
		
		this.controlador = controlador
		this.inicio=this.div.find('div').eq(0)
		this.listado=this.div.find('div').eq(1)
		this.logo= $('img').eq(0)
		this.spanBusq= $('div').eq(0)
		this.spanList= $('div').eq(1)
		
	
		this.listado.css('display','none')
		this.spanBusq.css('display','none')
		this.spanList.css('display','none')
		

		this.btnListar = this.div.find('button').eq(0)


		this.btnListar.click(this.listar.bind(this))
		this.logo.click(this.listar.bind(this))

		this.btnListar.keypress(this.listar.bind(this))
		this.logo.keypress(this.listar.bind(this))
		
	}*/
