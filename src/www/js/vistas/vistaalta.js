/**
 * @file Contiene el controlador principal de la aplicación
 * @author	Jorge Ortega <jorge77.ortega@gmail.com>
 */
import {Vista} from './vista.js'
import {Ropa} from '../modelo/ropa.js'
export function VistaAlta (controlador){
	return Vue.createApp({
		data(){
			return{
				cotrolador:controlador,
				mostrar:'none',
			}
		},
		template:
			`<div id="formularios" :class=mostrar>
				<label>Foto de la prenda</label>
				<input type="file" name="foto">
				<label>Nombre</label>
				<input type="text" name="nombre">
				<label>Talla</label>
				<input type="number" min="0" name="talla">
				<label>Dia comprado</label>
				<input type="date" name="talla">
				<label>Descripcion</label>
				<textarea name="descripcion" ></textarea>
				<label>Tipo</label>
				<select name="tipo">
					<option value="Parte de arriba">Parte de arriba</option>
					<option value="Parte de abajo">Parte de abajo</option>
					<option value="Accesorio">Accesorio</option>
					<option value="Calzado">Calzado</option>
				</select>
				<label>Estación</label>
				<label><input type="checkbox" name="pri"> Primavera</label>
				<label><input type="checkbox" name="ver"> Verano</label>
				<label><input type="checkbox" name="oto"> Otoño</label>
				<label><input type="checkbox" name="inv"> Invierno</label>
				<h3 class="error">Rellene las categorias marcadas para continuar</h3>
				<h3 class="error">No se admiten valores negativos en la talla</h3>
			</div>
			<div class="botones" :class=mostrar>
				<button id="cancelar">Cancelar</button>
				<button class="aceptar">Aceptar y volver</button>
				<button class="aceptar">Aceptar y continuar añadiendo</button>
			</div>		
			`,	
		methods:{
			/**
			 * Metodo que valida los datos y los envia o no al alta dependiendo del resultado
			 * @param {int} num depende de por donde se llegue al metodo el resultado varia
			 */
			validar(num){
				
				let imagenSrc= "../../src/www/assets/imagenes/camiseta1.jpg"//IGNORAR POR EL MOMENTO
				let nombre = this.formNombre.val()
				
				let talla = this.formTalla.val()
				let dia = this.formDia.val() //Año mes dia
				let descripcion = this.formDescripcion.val()
				let tipo = this.formTipo.val()
				let valArray = true
				let div =$('<div></div>')
				let p = $('<p></p>').text("Su prenda ha sido añadida correctamente, revise el listado")
				div.attr('title', 'Enhorabuena')
				div.append(p)

				let array = []
				array.push(this.pri.prop("checked"),this.ver.prop("checked"),this.oto.prop("checked"),this.inv.prop("checked"))
				
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

					let objeto = new Ropa(imagenSrc,nombre,talla,dia,descripcion,tipo,array)
					this.controlador.insertar(objeto)
					this.limpiar()
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
				this.controlador.listar()
				this.controlador.pulsarHeadList()
			},
			/**
			* Metodo que limpia el formulario cada vez que se inicializa
			*/
			limpiar(){
				this.op1.attr('selected','selected')
				this.pri.prop("checked",false)
				this.ver.prop("checked",false)	
				this.oto.prop("checked",false)		
				this.inv.prop("checked",false)


				
				this.formNombre.val('')
				this.formTalla.val('')
				this.formDia.val('')
				this.formDescripcion.val('')

				this.h3Error2.css('display','none')
				this.h3Error1.css('display','none')
				this.lbNombre.removeClass("textoerror")
				this.lbTalla.removeClass("textoerror")
				this.lbDia.removeClass("textoerror")
				this.lbDescripcion.removeClass("textoerror")
				this.lbEstacion.removeClass("textoerror")
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
		
		this.btnCancelar = this.div.find('button').eq(0)
		this.btnAceptarVolver = this.div.find('button').eq(1)
		this.btnAceptarForm = this.div.find('button').eq(2)

		
		this.formImg = this.div.find("input").eq(0)
		this.formNombre= this.div.find("input").eq(1)
		this.formTalla = this.div.find("input").eq(2)
		this.formDia = this.div.find("input").eq(3)
		this.formDescripcion = this.div.find("textArea").eq(0)
		this.formTipo = this.div.find("select").eq(0)
		this.op1=this.div.find('option').eq(0)
		this.op2=this.div.find('option').eq(1)
		this.op3=this.div.find('option').eq(2)
		this.op4=this.div.find('option').eq(3)

		this.pri = this.div.find("input").eq(4)
		this.ver = this.div.find("input").eq(5)
		this.oto = this.div.find("input").eq(6)
		this.inv = this.div.find("input").eq(7)
		this.lbNombre = this.div.find("label").eq(1)
		this.lbTalla = this.div.find("label").eq(2)
		this.lbDia = this.div.find("label").eq(3)
		this.lbDescripcion = this.div.find("label").eq(4)
		this.lbEstacion = this.div.find("label").eq(6)

		this.h3Error1 = this.div.find("h3").eq(0)
		this.h3Error2 = this.div.find("h3").eq(1)




		this.btnAceptarForm.click(this.validar.bind(this,1))
		this.btnAceptarForm.keypress(this.validar.bind(this,1))
		this.btnAceptarVolver.click(this.validar.bind(this,0))
		this.btnAceptarVolver.keypress(this.validar.bind(this,0))
		this.btnCancelar.click(this.volver.bind(this))
		this.btnCancelar.keypress(this.volver.bind(this))
	}*/
}