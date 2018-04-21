import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { ListPicker } from "ui/list-picker";
import { prompt, PromptResult, inputType } from "ui/dialogs";
import { alert } from "ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import {MyHttpGetService } from "../get.services/get.services";
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
let pokemonList = ["Bulbasaur", "Parasect", "Venonat", "Venomoth", "Diglett",
    "Dugtrio", "Meowth", "Persian", "Psyduck", "Arcanine", "Poliwrath", "Machoke"];
@Component({
    selector: "wi1",
    moduleId: module.id,
    templateUrl: "./wizard2.component.html",
    styleUrls: ['./wizard2.component.css'],
    providers: [MyHttpGetService]
})
export class Wizard2Component implements OnInit {
    public number1: string = "1";
    public number2: string = "0";
    public result: number = 0;
 
    
    public name ;
    public Products: any[];
    public productss;
    
    
    extractData2() {
        this.myService.getData('products')
            .subscribe((data) => {
                this.Products = data['products'];
                this.name = []
               
               
                for (let i = 0; i < this.Products.length; i++) {
                    this.name.push(this.Products[i]['name']);
                   
                } 
            
              
            }, (error) => {
                this.onGetDataError(error);
            });
    }
    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }

hola(name){
    console.log(name)
   
}
    suma(name){
  if(name){
      name.this.name=+1;
  }
    }
    resta(){
        this.result -=parseInt(this.number1) ;
        console.log(this.result);
        if (this.result<0){
            this.result +=parseInt(this.number1) ;
            console.log(this.result);
        }
       
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
        this.extractData2();
    
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/


  
    constructor(private router : RouterExtensions,private myService: MyHttpGetService) {
   
    }


    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    // constructor(private router : RouterExtensions ) { }

  
    wizard1(){
        this.router.navigate(['home']);
    }
    wizard3(){
        this.router.navigate(['wizard3']);
    }
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }


}
