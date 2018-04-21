import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-wizard",
    moduleId: module.id,
    templateUrl: "./wizard.component.html",
    // styleUrls: ['./wizard.component.css']
})
export class WizardComponent {
    

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private router : RouterExtensions ) { }

    wizard1(){
        this.router.navigate(['wizard1']);
    }
    wizard3(){
        this.router.navigate(['wizard3']);
    }


    ngOnInit(): void {
    
    }
}