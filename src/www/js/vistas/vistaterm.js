export function VistaTerm(controlador) {
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
			<h1>Terminos y consiciones</h1>
			<p>
			“En Virmario tratamos la información que nos facilita con el fin de prestarles el servicio
            solicitado y realizar su facturación. Los datos proporcionados se conservarán mientras se mantenga la
            relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales y atender las
            posibles responsabilidades que pudieran derivar del cumplimiento de la finalidad para la que los datos
            fueron recabados. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal.
            Usted tiene derecho a obtener información sobre si en Virmario estamos tratando sus datos
            personales, por lo que puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad de
            datos y oposición y limitación a su tratamiento ante Virmario, Empresa de desarrollo de software o
            en la dirección de correo electrónico reclamaciones@virmario.com, adjuntando copia de su DNI o
            documento equivalente. Asimismo, y especialmente si considera que no ha obtenido satisfacción plena en el
            ejercicio de sus derechos, podrá presentar una reclamación ante la autoridad nacional de control
            dirigiéndose a estos efectos a la Agencia Española de Protección de Datos, C/ Jorge Juan, 6 – 28001 Madrid.
            Asimismo, solicitamos su autorización para ofrecerle productos y servicios relacionados con los contratados
            y fidelizarle como cliente.”
			</p><br>
		</div>
        <label for="terminos">¿Acepta?</label><br>
            <label for="terminoSi"><input type="radio" id="terminoSi" name="vista" value="Si">Si</label>
            <label for="terminoNo"><input type="radio" id="terminoNo" name="vista" value="No" checked>No</label><br>
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