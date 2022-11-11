import { Component, OnInit, DoCheck, ComponentRef } from "@angular/core";

@Component({
    selector : "hooks-angular",
    templateUrl : './hooksangular.component.html'
})

export class HooksAngular implements OnInit{
    public mensaje : string;

    constructor() {
        console.log("Entrando en constructor");
        this.mensaje= "Soy hooks angular";
    }

    //IMPLEMENTAMOS EL METODO ONINIT
    ngOnInit(): void {
        console.log("ngOnInit(): Ejecutando este metodo!!");
    }

    //IMPLEMENTAMOS EL METODO ngDoCheck
    ngDoCheck() : void {
        console.log("Ejecutando ngDoCheck()")
    }

    //VAMOS A CREAR UN METODO PERSONALIZADO PARA LLAMARLO CON UN BOTON
    cambiarMensaje() : void {
        this.mensaje = "Single day!!!!";
    }
}
