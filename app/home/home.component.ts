import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";
import { ListPicker } from "ui/list-picker";
import { prompt, PromptResult, inputType } from "ui/dialogs";
import { alert } from "ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";
import {MyHttpGetService }from "../get.services/get.services";
import * as Connectivity from "tns-core-modules/connectivity";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
    providers: [MyHttpGetService]
})
export class HomeComponent implements OnInit {
    public connectionType: string;
    public places: any[];
    public name_places: Array<string>;
    public name:  Array<string>;
    public buildings:any[];
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
       
      

        this._sideDrawerTransition = new SlideInOnTopTransition();
        this.connectionType = this.connectionToString(Connectivity.getConnectionType());
        Connectivity.startMonitoring(connectionType => {
            this.zone.run(() => {
                this.connectionType = this.connectionToString(connectionType);
            });
        });
    }
   
    extractData() {
        // this.myService.getData('building/'+args.newIndex)
        //     .subscribe((data) => {
        //         this.places = data['places'];
        //         this.name_places = [];
               
        //         // Esto es exactamente lo mismo que
        //         for (let i = 0; i < this.places.length; i++) {
        //             this.name_places.push(this.places[i]['name']);
        //         }
        //         //ESTO
        //         // for(let place in this.places){
        //         //     console.log(this.places[place]['place_name']);
        //         //     this.name_places.push(this.places[place]['place_name']);
        //         // }
                
        //     }, (error) => {
        //         this.onGetDataError(error);
        //     });
    }
    extractData2() {
        this.myService.getData('buil/1')
            .subscribe((data) => {
                
                this.buildings = data['buildings'];
                this.name = [];
                 for (let i = 0; i < this.buildings.length; i++) {
                    this.name.push(this.buildings[i]['name']);
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

  
    constructor(private router : RouterExtensions,private myService: MyHttpGetService,private zone: NgZone) {
        
        this.connectionType = "Unknown";
      
    }

    public onchange(args: SelectedIndexChangedEventData) {
        // console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
        console.log(this.name[args.newIndex])
        if (this.name[args.newIndex]){
            this.myService.getData('building/'+args.newIndex)
            .subscribe((data) => {
                this.places = data['places'];
                this.name_places = [];
               
                // Esto es exactamente lo mismo que
                for (let i = 0; i  < this.places.length; i++) {
                    this.name_places.push(this.places[i]['name']);
                }
                //ESTO
                // for(let place in this.places){
                //     console.log(this.places[place]['place_name']);
                //     this.name_places.push(this.places[place]['place_name']);
                // }
                
            }, (error) => {
                this.onGetDataError(error);
            });

        }
       
        console.log(this.places[args.newIndex])
           
           
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
    public connectionToString(connectionType: number): string {
        switch(connectionType) {
            case Connectivity.connectionType.none:
            this.router.navigate(['zonai'],{ clearHistory:true});
                return "No Connection!";
            case Connectivity.connectionType.wifi:
                return "Connected to WiFi!";
            case Connectivity.connectionType.mobile:
                return "Connected to Cellular!";
            default:
                return "Unknown";
        }
    }
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    // constructor(private router : RouterExtensions ) { }

    wizard(){
        this.router.navigate(['wizard2']);
    }


}
