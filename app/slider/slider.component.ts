import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
@Component({
    selector: "sliderp",
    moduleId: module.id,
    templateUrl: "./slider.component.html",
    styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


    constructor(private page: Page,private router : RouterExtensions ) { 
        this.page.actionBarHidden = true;
     

    }
    ngOnInit(): void {
    }
    goToSignUp(){
        this.router.navigate(['firstscreen']);
        
    }
}
