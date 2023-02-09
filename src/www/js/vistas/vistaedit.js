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
				
				this.limpiar()
				this.quitarErrores()
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
			/**
			 * Metodo que limpia el formulario despues de su uso por si acacso
			 */
			limpiar(){
				/*this.op1.attr('selected','selected')
				
				this.pri.prop("checked",false)
				this.ver.prop("checked",false)
				this.oto.prop("checked",false)		
				this.inv.prop("checked",false)

				
				this.nombre.val('')
				this.talla.val('')
				this.dia.val('')
				this.descripcion.val('')*/
			},/**
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
				
				let array = []
				array.push(this.objeto.pri,this.objeto.ver,this.objeto.oto,this.objeto.inv)
				
				if(array[0]==false && array[1]==false && array[2]==false&& array[3]==false){
					valArray= false
				}
				
				if (nombre=='' || talla==''||talla<0 || dia=='' || descripcion=='' || valArray==false){
					if (nombre==''){
						this.h3Error1.css('display','block')
						this.lbNombre.addClass("textoerror",1000)
					} 
					if (talla==''){
						this.h3Error1.css('display','block')
						this.lbTalla.addClass("textoerror",1000)
					} 
					if (dia==''){
						this.h3Error1.css('display','block')
						this.lbDia.addClass("textoerror",1000)
					} 
					if (descripcion==''){
						this.h3Error1.css('display','block')
						this.lbDescripcion.addClass("textoerror",1000)
					} 
					if (valArray==false){
						this.h3Error1.css('display','block')
						this.lbEstacion.addClass("textoerror",1000)
					} 
					if (talla<0){
						this.h3Error2.css('display','block')
						this.lbTalla.addClass("textoerror",1000)
					} 	
				}else{

					let ropa = new Ropa(imagenSrc,nombre,talla,dia,descripcion,tipo,array)
					this.controlador.guardar(this.objeto.id,ropa)
					this.limpiar()
					
				}
			},/**
			* Metodo para volver a la vista anterior
			*/
			volver(){
				this.quitarErrores()
				this.controlador.pulsarHeadCons()
			},
			/**
			 * Metodo para quitar los avisos por datos incorrectos
			 */
			quitarErrores(){
				/*this.h3Error2.css('display','none')
				this.h3Error1.css('display','none')
				this.lbNombre.removeClass("textoerror")
				this.lbTalla.removeClass("textoerror")
				this.lbDia.removeClass("textoerror")
				this.lbDescripcion.removeClass("textoerror")
				this.lbEstacion.removeClass("textoerror")*/
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