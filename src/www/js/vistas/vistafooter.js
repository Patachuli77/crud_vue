export function VistaFooter(controlador) {
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
			}
		},
		template: `

                <div>
                    <span  @click=pulsarTerminos>Términos & Condiciones</span>
                </div>
                <div>
                    <span @click=pulsarAvisosLegales>Avisos Legales</span>
                </div>
                <div>
                    <span @click=pulsarPolitica>Política de Cookies</span>
                </div>
                <div>
                    <span  @click=pulsarPropiedad>Propiedad Intelectual</span>
                </div>
    `,
		methods: {
            pulsarTerminos() {
                 this.controlador.pulsarTerminos()
               },
            pulsarAvisosLegales() {
                  this.controlador.pulsarAvisosLegales()
            },
            pulsarPolitica() {
                this.controlador.pulsarPolitica()
            },
            pulsarPropiedad() {
                this.controlador.pulsarPropiedad()
            }
		}
	})
}