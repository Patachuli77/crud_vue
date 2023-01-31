/**
 * @file Contiene el controlador principal de la aplicación
 * @author	Jorge Ortega <jorge77.ortega@gmail.com>
 */
export class Vista{
	constructor(div){
		this.div = div 
		
	}/**
	 * Metodo que muestra o no las vistas
	 * @param {boolean} ver 
	 */
	mostrar(ver){
		if(ver)
			this.div.css('display','flex')
		else
		this.div.css('display','none')
	}
}