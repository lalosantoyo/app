import { Component, OnInit,ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RouterExtensions } from "nativescript-angular/router";
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
import { DrawerTransitionBase } from "nativescript-pro-ui/sidedrawer";
let pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
    "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];

@Component({
    selector: "ns-wizard1",
    moduleId: module.id,
    templateUrl: "./wizard1.component.html",
    styleUrls: ['./wizard1.component.css']
})
export class Wizard1Component implements OnInit {
    
    public selectedIndex: number = null;
    public hint                  = "Edificio                                      ";
    public items: ValueList<string>;
    public pokemons: Array<string>;
    public cssClass: string      = "default                                       ";
    public hint2                 = "Lugar                                         ";
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;
    public ngOnInit() {
        this.items = new ValueList<string>();
        for ( let loop = 0; loop < 200; loop++ ) {
            this.items.push({
                value:   `I${loop}`,
                display: `Item ${loop}`,
            });
        }
        
       
    }
    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    constructor(private router : RouterExtensions) {
        this.pokemons = [];

        for (let i = 0; i < pokemonList.length; i++) {
            this.pokemons.push(pokemonList[i]);
        }
    }

    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}. New value is "${this.items.getValue(
            args.newIndex)}"`);
    }

    public onopen() {
        console.log("Drop Down opened.");
    }

    public onclose() {
        console.log("Drop Down closed.");
    }

    public changeStyles() {
        this.cssClass = "changed-styles";
    }
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    // constructor(private router : RouterExtensions ) { }

    wizard(){
        this.router.navigate(['wizard']);
    }
    // goTohome(){
    //     this.router.navigate(['inicio']);
    // }


   
}