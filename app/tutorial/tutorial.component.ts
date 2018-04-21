import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { TouchGestureEventData, SwipeGestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { Page } from "ui/page";


@Component({
    selector: "ns-tutorial",
    moduleId: module.id,
    templateUrl: "./tutorial.component.html",
    styleUrls: ['./tutorial.component.css']})
export class TutorialComponent {
    

    constructor(private page: Page,private router : RouterExtensions ) { 
        this.page.actionBarHidden = true;
     

    }

    goToSignUp(){
        this.router.navigate(['log']);
    }
    
    onSwipe(args: SwipeGestureEventData) {
        console.log("Swipe Direction: " + args.direction);
        this.router.navigate(['log']);

    }
    // ngOnInit(): void {
    
    // }
}