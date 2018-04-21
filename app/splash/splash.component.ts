import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Progress } from "ui/progress";



@Component({
    selector: "ns-splash",
    moduleId: module.id,
    templateUrl: "./splash.component.html",
    styleUrls: ['./splash.component.css']
})
export class SplashComponent {
    private timeSplash = 0;

    constructor(private nav: RouterExtensions) {}
 
    public progressValue: number;

    ngOnInit() {
        this.progressValue = 25;

        setInterval(() => {
            if(this.timeSplash< 8000){
                this.progressValue += 4;
                this.timeSplash += 400;
            }else if(this.timeSplash !=8000) {
                this.nav.navigate(['/log'], { clearHistory:true})
            }
           
        } , 300,);
        
        
    }

    onValueChanged(args) {
        let progressBar = <Progress>args.object;

        console.log("Value changed for " + progressBar);
        console.log("New value: " + progressBar.value);
    }
    cambio(){
      this.nav.navigate(['/log'], { clearHistory:true})
     
 
    }

    // this.nav.navigate(['/log'], { clearHistory:true});
   
}