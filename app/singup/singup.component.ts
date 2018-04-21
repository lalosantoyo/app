import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";


@Component({
    selector: "ns-singup",
    moduleId: module.id,
    templateUrl: "./singup.component.html",
    styleUrls: ['./singup.component.css']
})
export class SingupComponent {
    

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
  

    constructor(private page: Page,private router : RouterExtensions ) { 
        this.page.actionBarHidden = true;}

    log(){
        this.router.navigate(['log']);
    }
    goTohome(){
        this.router.navigate(['inicio']);
    }


    ngOnInit(): void {
    
    }
}