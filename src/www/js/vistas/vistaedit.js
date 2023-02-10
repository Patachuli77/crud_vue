/**
 * @file Contiene el controlador principal de la aplicación
 * @author	Jorge Ortega <jorge77.ortega@gmail.com>
 */
import {Vista} from './vista.js'
import {Ropa} from '../modelo/ropa.js'
export function VistaEdit(controlador){
	return Vue.createApp({
		data(){
			return{
				controlador:controlador,
				mostrar: 'none',
				objeto:{
					id: null,
					nombre:null,
					talla: null,
					diaComprado: null,
					descripcion: null,
					tipo: null,
					pri: false,
					ver: false,
					oto: false,
					inv: false,
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
				<h3 class="error">Rellene las categorias marcadas para continuar</h3>
				<h3 class="error">No se admiten valores negativos en la talla</h3>
			</div>
			<div class="botones" :class=mostrar>
				<a><span role="button" id="volver"  @click=volver tabindex="10000017">Volver</span></a>
				<a><span role="button" id="eliminar"  @click=borrar tabindex="10000018">Eliminar</span></a>
				<a><span role="button" id="guardar"  @click=guardar tabindex="10000019">Guardar</span></a>
        	</div> 		
			`,	
		methods:{
			/**
			 * Metodo que muestra los datos del objeto en la vista de edicion
			 * @param {object} ropa 
			 */
			mostrarDatos(ropa){
				
				this.objeto.id = ropa.id
				console.log(ropa)
				
				
				this.objeto.nombre = ropa.nombre
				this.objeto.talla = ropa.talla
				this.objeto.dia = ropa.diaComprado
				this.objeto.tipo= ropa.tipo
				this.objeto.descripcion=ropa.descripcion
				this.objeto.pri = ropa.estacion[0]
				this.objeto.ver = ropa.estacion[1]
				this.objeto.oto = ropa.estacion[2]
				this.objeto.inv = ropa.estacion[3]
		
			},
			/*
			* MEtodo que llama al controlador para borrar
			*/
			borrar(){
				this.controlador.borrado(this.objeto.id)
			},
			/**
			 * Metodo que valida los datos del formulario y decide si enviarlos o no dependindo del resultado
			 */
			guardar(){
				let imagenSrc= "../../src/www/assets/imagenes/camiseta1.jpg"//IGNORAR POR EL MOMENTO
				let nombre = this.objeto.nombre
				let talla = this.objeto.talla
				let dia = this.objeto.dia //Año mes dia
				let descripcion = this.objeto.descripcion
				let tipo = this.objeto.tipo
				let valArray = true
				let div =$('<div></div>')
				let p = $('<p></p>')
				
				div.append(p)
				let array = []
				array.push(this.objeto.pri,this.objeto.ver,this.objeto.oto,this.objeto.inv)
				
				if(array[0]==false && array[1]==false && array[2]==false&& array[3]==false){
					valArray= false
				}
				
				if (nombre=='' || talla==''||talla<0 || dia=='' || descripcion=='' || valArray==false){
					div.attr('title', 'Error')
					p.text("Por favor rellene todos los campos para poder editar una prenda")
					div.dialog()
				}else{

					let ropa = new Ropa(imagenSrc,nombre,talla,dia,descripcion,tipo,array)
					this.controlador.guardar(this.objeto.id,ropa)
					
				}
			},/**
			* Metodo para volver a la vista anterior
			*/
			volver(){
				this.controlador.pulsarHeadCons()
			},
			ver(ver){
				if(ver)
					this.mostrar = 'flex'
				else
				this.mostrar ='none'
			}
		},
	})
	
}