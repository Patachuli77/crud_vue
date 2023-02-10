export function VistaProp(controlador) {
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				titulo: 'Vista Avisos Legales',
				mostrar: 'none',
			}
		},
		template: `
	<div :class=mostrar>
		<div>
			<h1>Propiedad Intelectual</h1>
			<p>El logotipo de Viermario es original y esta protegido mediante derechos de autor</p>
            <p>La imagen de la camiseta esta sacada de https://commons.wikimedia.org/wiki/File:Camiseta_Blanca_con_cuello_en_V.jpg con licencia Creative Commons Attribution-Share Alike 4.0 International</p>
            <p>La tipografia league spartan esta descargada de google fonts bajo licencia SIL Open Font License</p>
		</div>
	</div>	
    `,

		methods: {
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