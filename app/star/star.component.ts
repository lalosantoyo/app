import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { registerElement } from 'nativescript-angular/element-registry';
registerElement('StarRating',() => require('nativescript-star-ratings').StarRating);

let nativescriptStarRatings = require("nativescript-star-ratings")
@Component({
    selector: "ns-star",
    moduleId: module.id,
    templateUrl: "./star.component.html",
    
})
export class StarComponent {
    

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    
    constructor(private router : RouterExtensions ) { }

    ngOnInit(): void {
    
    }

}