import { Component, OnInit, ViewChild } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { ListPicker } from "ui/list-picker";
import { prompt, PromptResult, inputType } from "ui/dialogs";
import { alert } from "ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
import { MyDrawerComponent} from "../shared/my-drawer/my-drawer.component"
@Component({
    selector: "wizard3",
    moduleId: module.id,
    templateUrl: "./wizard3.component.html",
    styleUrls: ['./wizard3.component.css'],
    providers: [MyDrawerComponent]
})
export class Wizard3Component implements OnInit {
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
        this.items = new ValueList<string>();
        for ( let loop = 0; loop < 200; loop++ ) {
            this.items.push({
                value:   `I${loop}`,
                display: `Item ${loop}`,
            });
        }
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
    public selectedIndex: number = null;
    public hint                  = "Edificio                                      ";
    public items: ValueList<string>;
    public pokemons: Array<string>;
    public cssClass: string      = "default                                       ";
    public hint2                 = "Lugar                                         ";

  
    constructor(private router : RouterExtensions,public mydrawer:MyDrawerComponent) {
        this.pokemons = [];
    }

    public onchange(args: SelectedIndexChangedEventData) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}. New value is "${this.items.getValue(
            args.newIndex)}"`);
    }

    public onopen() {
        console.log("Drop Down opened.");
    }

    public onclose() {
        console.log("Drop Down closed.");
    }

    public changeStyles() {
        this.cssClass = "changed-styles";
    }
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    // constructor(private router : RouterExtensions ) { }

  
    wizard(){
        this.router.navigate(['wizard2']);
    }
    wizard3(){
        this.router.navigate(['wizard3']);
    
    }
    public isItemVisible: boolean = false;
    ver(){
        this.isItemVisible = true;
        console.log( this.isItemVisible);

    }
    ocultar(){
        this.isItemVisible = false;
        console.log( this.isItemVisible);
    }
    mostrar(){
        this.mydrawer.showMainContent()
       
     

    }
  


}
