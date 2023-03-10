/**
 * @file Contiene el controlador principal de la aplicación
 * @author	Jorge Ortega <jorge77.ortega@gmail.com>
 */
import {Ropa} from '../modelo/ropa.js'
export function VistaAlta (controlador){
	return Vue.createApp({
		data(){
			return{
				controlador:controlador,
				mostrar:'none',
				objeto:{
					nombre:null,
					talla: null,
					diaComprado: null,
					descripcion: null,
					tipo: null,
					pri: false,
					ver: false,
					oto: false,
					inv: false,
					pol: false,
				},
			}
		},
		template:
			`<div id="formularios" :class=mostrar>
				<label>Foto de la prenda</label>
				<input type="file" name="foto">
				<label>Nombre</label>
				<input type="text" v-model=objeto.nombre name="nombre">
				<label>Talla</label>
				<input type="number" min="0" v-model=objeto.talla name="talla">
				<label>Dia comprado</label>
				<input type="date" v-model=objeto.diaComprado name="dia">
				<label>Descripcion</label>
				<textarea name="descripcion" v-model=objeto.descripcion ></textarea>
				<label>Tipo</label>
				<select name="tipo" v-model=objeto.tipo>
					<option value="Parte de arriba">Parte de arriba</option>
					<option value="Parte de abajo">Parte de abajo</option>
					<option value="Accesorio">Accesorio</option>
					<option value="Calzado">Calzado</option>
				</select>
				<label>Estación</label>
				<label><input type="checkbox" v-model=objeto.pri name="pri"> Primavera</label>
				<label><input type="checkbox" v-model=objeto.ver name="ver"> Verano</label>
				<label><input type="checkbox" v-model=objeto.oto name="oto"> Otoño</label>
				<label><input type="checkbox" v-model=objeto.inv name="inv"> Invierno</label>
				<label><input type="checkbox" v-model=objeto.pol name="pol"> Acepto sin reservas la <b @click=politica>politica de proteccion de datos personales</b></label>
				<h3 class="error">Rellene las categorias marcadas para continuar</h3>
				<h3 class="error">No se admiten valores negativos en la talla</h3>
			</div>
			<div class="botones" :class=mostrar>
				<button id="cancelar" @click=volver>Cancelar</button>
				<button class="aceptar" @click=validar(0) >Aceptar y volver</button>
				<button class="aceptar" @click=validar(1) >Aceptar y continuar añadiendo</button>
			</div>		
			`,	
		methods:{
			/**
			 * Metodo que valida los datos y los envia o no al alta dependiendo del resultado
			 * @param {int} num depende de por donde se llegue al metodo el resultado varia
			 */
			validar(num){
				
				let imagenSrc= "../../src/www/assets/imagenes/camiseta1.jpg"//IGNORAR POR EL MOMENTO
				let nombre = this.objeto.nombre
				
				let talla = this.objeto.talla
				let dia = this.objeto.diaComprado
				let descripcion = this.objeto.descripcion
				let tipo = this.objeto.tipo
				let valArray = true
				let pol = this.objeto.pol
				let div =$('<div></div>')
				let p = $('<p></p>')
				
				div.append(p)

				let array = []
				array.push(this.objeto.pri,this.objeto.ver,this.objeto.oto,this.objeto.inv)
				
				if(array[0]==false && array[1]==false && array[2]==false&& array[3]==false){
					valArray= false
				}
				
				if (nombre=='' || talla==''||talla<0 || dia=='' || descripcion=='' || pol==false ||valArray==false){
					div.attr('title', 'Error')
					p.text("Por favor rellene todos los campos para poder añadir una prenda")
					div.dialog()
				}else{
					console.log(this.controlador)
					let objeto = new Ropa(imagenSrc,nombre,talla,dia,descripcion,tipo,array)
					this.controlador.insertar(objeto)
					
					this.limpiar()
					div.attr('title', 'Enhorabuena')
					p.text("Su prenda ha sido añadida correctamente, revise el listado")
					div.dialog()
					if(num==0){
						
						this.volver()
					}
				}	
			},
			/**
			* Metodo que vuelve a la vista principal sin realizar cambios
			*/
			volver(){
				this.limpiar()
				
				this.controlador.pulsarHeadList()
			},
			/**
			* Metodo que limpia el formulario cada vez que se inicializa
			*/
			limpiar(){
				this.objeto.nombre= null
				this.objeto.talla= null
				this.objeto.diaComprado= null
				this.objeto.descripcion= null
				this.objeto.tipo= null
				this.objeto.pri= false
				this.objeto.ver= false
				this.objeto.oto= false
				this.objeto.inv= false
				this.objeto.pol=false
			},
			ver(ver){
				if(ver)
					this.mostrar = 'flex'
				else
				this.mostrar ='none'
			},
			politica(){
				this.controlador.pulsarTerminos()
			}
		}
	})

}