import { Component, Input, OnInit, ViewChild , ElementRef} from "@angular/core";
import { View } from "ui/core/view";
import { Animation } from "ui/animation";
/* ***********************************************************
* Keep data that is displayed in your app drawer in the MyDrawer component class.
* Add new data objects that you want to display in the drawer here in the form of properties.
*************************************************************/
@Component({
    selector: "MyDrawer",
    moduleId: module.id,
    templateUrl: "./my-drawer.component.html",
    styleUrls: ["./my-drawer.component.css"]
})
export class MyDrawerComponent implements OnInit {
 
    public isItemVisible: boolean = false;
    showMainContent() {
        this.isItemVisible = true;
        if(this.selectedPage){
            this.isItemVisible = true;

        }
        console.log( this.isItemVisible);
    }
  
    /* ***********************************************************
    * The "selectedPage" is a component input property.
    * It is used to pass the current page title from the containing page component.
    * You can check how it is used in the "isPageSelected" function below.
    *************************************************************/
    @Input() selectedPage: string;

    ngOnInit(): void {
        /* ***********************************************************
        * Use the MyDrawerComponent "onInit" event handler to initialize the properties data values.
        *************************************************************/
    }

    /* ***********************************************************
    * The "isPageSelected" function is bound to every navigation item on the <MyDrawerItem>.
    * It is used to determine whether the item should have the "selected" class.
    * The "selected" class changes the styles of the item, so that you know which page you are on.
    *************************************************************/
    isPageSelected(pageTitle: string): boolean { 
        while(this.isItemVisible =true){
            this.isItemVisible = true;
        }
        return pageTitle === this.selectedPage;
        
     
    }
}
