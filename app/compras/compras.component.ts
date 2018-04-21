import { Component, ChangeDetectionStrategy } from "@angular/core";

class Country {
    constructor(public name: string) { }
}

let europianCountries = ["burrito de verde", "burrito de rojo", "burrito de desebrada", "burrito de desebrada"];

@Component({
    selector: "ns-compras",
    moduleId: module.id,
    templateUrl: "./compras.component.html",
    styleUrls: ['./compras.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComprasComponent {
    public countries: Array<Country>;

    constructor() {
        this.countries = [];

        for (let i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i]));
        }
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }
}