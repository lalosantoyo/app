import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { EventData } from "data/observable";
import { Label } from "ui/label";
import * as utils from "utils/utils";
var utilityModule =require("utils//utils");
function pageLoaded(args){

    var page =args.object;
    page.bindingContext={};
}
exports.pageLoaded = pageLoaded;
exports.launch = function(){
    utilityModule.openUrl("http://familiaburrera.tk");
} 

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
    styleUrls: ['./settings.component.css']

})
export class SettingsComponent implements OnInit {
    opens(){
        utilityModule.openUrl("http://familiaburrera.tk");


    }
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    public oneway = "One way bound label";
    public twoway = "L o r e m   i p s u m   d o l o r   s i t   a m e t , consectetur   adipiscing   elit,   sed   do eiusmod  tempor  incididunt  ut  labore et  dolore  magna  aliqua.  Ut  enim  ad m i n i m   v e n i a m ,   q u i s   n o s t r u d exercitation   ullamco   laboris   nisi   ut aliquip ex ea commodo consequat.";
    public counter: number;

    constructor() {
        this.counter = 0;
    }

    changeLabelText() {
        this.twoway += " L o r e m   i p s u m   d o l o r   s i t   a m e t , consectetur   adipiscing   elit,   sed   do eiusmod  tempor  incididunt  ut  labore et  dolore  magna  aliqua.  Ut  enim  ad m i n i m   v e n i a m ,   q u i s   n o s t r u d exercitation   ullamco   laboris   nisi   ut aliquip ex ea commodo consequat. ";
        this.counter += 1;
    }

    onTextChanged(args: EventData) {
        let label = <Label>args.object;
        console.log("onTextChanged for " + this.counter + " times for element " + label);
    }
    open(){
        utils.openUrl("https://stackoverflow.com/questions/45549814/how-to-open-playstore-app-url-on-button-click-in-angular2-nativescript");
    }
}
