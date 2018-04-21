import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from "ui/page";
import { Animation } from "ui/animation";




@Component({
    selector: "ns-firstscreen",
    moduleId: module.id,
    templateUrl: "./firstscreent.component.html",
     styleUrls: ['./firstscreent.component.css']
})
export class FirstscreenComponent {
    clearHistory:true;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    
    constructor(private page: Page,private router : RouterExtensions ) { 
        this.page.actionBarHidden = true; }

    goToSignUp(){
        this.router.navigate(['singup']);
    }
    goTohome(){
        this.router.navigate(['log']);
    }


    ngOnInit(): void {
    
    }
    startBackgroundAnimation(background) {
        background.animate({
          scale: { x: 1.0, y: 1.0 },
          duration: 10000
        });
      }
    
}