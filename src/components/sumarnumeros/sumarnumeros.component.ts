import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'sumar-numeros',
    templateUrl: './sumarnumeros.component.html'
})
export class SumarNumeros {

    //DECLARAMOS LAS REFERENCIAS A CADA ELEMENTO DEL FORMULARIO
    @ViewChild("cajanumero1") cajaNumero1! : ElementRef;
    @ViewChild("cajanumero2") cajaNumero2! : ElementRef;

    public suma! : number;

    //EN ANGULAR TODOS LOS OBJETOS DEBEN SER INSTANCIADOS

    //ESTO SOBRARIA SI PONEMOS LAS EXCLAMACIONES YA QUE LO GENERA EL SOLO O YO EN ALGUN MOMENTO COMO EN SUMARNUMEROS
    // constructor() {
    //     this.suma = 0;
    //     this.cajaNumero1 = new ElementRef(0);
    //     this.cajaNumero2 = new ElementRef(0);
    // }

    sumarNumeros() : void {
        var num1 = parseInt(this.cajaNumero1.nativeElement.value);
        var num2 = parseInt(this.cajaNumero2.nativeElement.value);

        this.suma = num1 + num2;
    }

}