import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ListPicker } from "ui/list-picker";
import { prompt, PromptResult, inputType } from "ui/dialogs";
import { DatePicker } from "ui/date-picker";
import { EventData } from "data/observable";

let pokemonList = ["Edificio-A", "Edificio-B", "Edificio-C", "Edificio-D", "Edificio-E",
    "Edificio-F"];
let lugares =["UAA","UTA","ITA","UTR"];

@Component({
    selector: "ns-prueba",
    moduleId: module.id,
    templateUrl: "./prueba.component.html",
    styleUrls: ['./prueba.component.css']

})
export class PruebaComponent {
 
    public pokemons: Array<string>;
    public lugares: Array<string>;
    public picked: string;

    constructor() {
        this.pokemons = [];
        this.lugares = [];

        for (let i = 0; i < pokemonList.length; i++) {
            this.pokemons.push(pokemonList[i]);
        }
        for (let i = 0; i < lugares.length; i++) {
            this.lugares.push(lugares[i]);
        }
    }

    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        console.log("picker selection: " + picker.selectedIndex);

        this.picked = this.pokemons[picker.selectedIndex];
        this.picked = this.lugares[picker.selectedIndex];
    }
    displayPromptDialog() {
        // >> prompt-dialog-code
        let options = {
            title: "Name",
            defaultText: "Enter your name",
            inputType: inputType.text,
            okButtonText: "Ok",
            cancelButtonText: "Cancel",
            lugar: "sdad"
        };

        prompt(options).then((result: PromptResult) => {
            console.log("Hello, " + result.text);
        });
        // << prompt-dialog-code
    }
      
    
}