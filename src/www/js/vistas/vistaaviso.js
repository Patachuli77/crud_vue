export function VistaAvsL(controlador) {
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
			<h1>Aviso Legal</h1>
			<p>
			La presente página web, con dirección URL www.virmario.es, 
			es operada por la sociedad ArmarIO, S.L., con CIF B-94637285, 
			cuyo domicilio se encuentra en Badajoz, calle Prenditas 42.
			Puede obtener más información remitiendo un correo a la siguiente dirección de correo electrónico 
			de contacto contacto@virmario.es o llamando al numero 677967836.
			</p>
		</div>
	</div>	
    `,

		methods: {
			ver(ver){
				if(ver){
					this.mostrar='flex'
				}
				else{
					
					this.mostrar='none'
				}
			}
		}
	})
}