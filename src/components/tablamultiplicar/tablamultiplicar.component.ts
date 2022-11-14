import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'tabla-multiplicar',
    templateUrl: './tablamultiplicar.component.html'
})
export class TablaMultiplicar implements OnInit{
    @ViewChild("cajanumero") cajaNumero! : ElementRef;

    public suma : Array<string>;
    constructor() {
        //this.suma = [];
        this.suma = new Array<string>();
    }

    tablaMultiplicar() : void {
        var num1 = parseInt(this.cajaNumero.nativeElement.value);
        //this.suma = [];
        this.suma = new Array<string>();
        for( let i = 1; i < 11; i++) {
            this.suma.push(num1 + " * " + i + " = " + (num1 * i));
        }
    }

    ngOnInit() : void {

    }
}