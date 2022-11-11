import { Component } from '@angular/core';

@Component({
    selector: 'app-deportes',
    templateUrl: './deportes.component.html',
    styleUrls: ['./deportes.component.css'],
})
export class Deportes {
    public sports : Array<string>;
    public numeros : Array<number>;

    constructor() {
        this.sports = ["Futbol", "F1", "Ajedrez", "Polo", "Balonmano", "Ajedrez", "Polo", "Balonmano"];

        this.numeros = [11, 6, 7, 70, 9, 24]
    }
}