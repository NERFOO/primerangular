import { Component } from '@angular/core';

@Component({
    selector: 'formulario-binding',
    templateUrl: './formulariobinding.component.html'
})
export class FormulariobindingComponent {
    //DECLARAMOS UN MODEL PARA EL BINDIN

    public user : any;
    public mensaje : string;

    constructor() {
        this.mensaje = "";
        this.user = {
            nombe : "",
            apellidos : "",
            edad : 0
        }
    }

    recibirDatos() : void {
        this.mensaje = "Datos recibidos";
    }
}