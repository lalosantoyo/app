import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-wizard3",
    moduleId: module.id,
    templateUrl: "./wizard3.component.html",
    styleUrls: ['./wizard3.component.css']
})
export class Wizard3Component {
    

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private router : RouterExtensions ) { }

    wizard(){
        this.router.navigate(['wizard']);
    }
    goTohome(){
        this.router.navigate(['inicio']);
    }


    ngOnInit(): void {
    
    }
}