import { Component, OnInit , NgZone} from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from "ui/page";
import * as Connectivity from "tns-core-modules/connectivity";

@Component({
    selector: "ns-zonai",
    moduleId: module.id,
    templateUrl: "./zonai.component.html",
        styleUrls: ['./zonai.component.css']
})
export class ZonaiComponent   implements OnInit{
    public connectionType: string;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    
    constructor(private router : RouterExtensions,private page: Page ,private zone: NgZone) { 
        this.page.actionBarHidden = true;
        this.connectionType = "Unknown";
    }


    ngOnInit(): void {
        this.connectionType = this.connectionToString(Connectivity.getConnectionType());
        Connectivity.startMonitoring(connectionType => {
            this.zone.run(() => {
                this.connectionType = this.connectionToString(connectionType);
            });
        });
    
    }
    public connectionToString(connectionType: number): string {
        switch(connectionType) {
            case Connectivity.connectionType.none:
                return "No Connection!";
            case Connectivity.connectionType.wifi:
            this.router.navigate(['home']);
                return "Connected to WiFi!";
            case Connectivity.connectionType.mobile:
                return "Connected to Cellular!";
            default:
                return "Unknown";
        }
    }
}