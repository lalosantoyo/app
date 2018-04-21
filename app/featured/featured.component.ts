import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { RouterExtensions } from "nativescript-angular/router";
import {MyHttpGetService }from "../get.services/get.services";
import * as Connectivity from "tns-core-modules/connectivity";


@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html",
    styleUrls: ['./featured.component.css'],
    providers: [MyHttpGetService]
})
export class FeaturedComponent implements OnInit {
    public name2:Array<string>;
    public usuarios:any [];
    public name:Array<string>;

    
    constructor(private router : RouterExtensions,private myService: MyHttpGetService ) {
 

     }
     extractData3() {
        this.myService.getData('Info')
            .subscribe((data) => {
                this.usuarios=data ['usuario'];
                this.name = [];
                this.name2 = [];
                
                for (let i = 0; i < this.usuarios.length; i++) {
                    console.log(this.usuarios[i]['names'] + " "+this.usuarios[i]['last_name'])
                    this.name2.push(this.usuarios[i]['names'] + " "+this.usuarios[i]['last_name']);
                    this.name.push(this.usuarios[i]['birthday']);
                } return this.name2
              
            }, (error) => {
                this.onGetDataError(error);
            });
    }
   

  
    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
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
        this.extractData3();
  
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
    goToLog(){
        this.router.navigate(['log']);
    }
    goToPass(){
        this.router.navigate(['pass']);
    }
}
