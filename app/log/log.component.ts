import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Color } from "color";
import { View } from "ui/core/view";
import { Page } from "ui/page";





@Component({
    selector: "ns-log",
    moduleId: module.id,
    templateUrl: "./log.component.html",
     styleUrls: ['./log.component.css']
})
export class LogComponent {
    
    clearHistory:true;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    
    

    constructor(private page: Page,private router : RouterExtensions ) { 
        this.page.actionBarHidden = true;
    }

    goToSignUp(){
        this.router.navigate(['singup'],{ clearHistory:true});
    }
    goTohome(){
        this.router.navigate(['home'],{ clearHistory:true});
    }
    repass(){
        this.router.navigate(['repass']);
    }


    ngOnInit(): void {
    
    }
   
}