import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {LogComponent} from "./log/log.component";
import{SingupComponent} from "./singup/singup.component";
import{SplashComponent} from "./splash/splash.component";
import {ZonaComponent} from "./zona/zona.component";
import {ZonaiComponent} from "./zonai/zonai.component";
import {TutorialComponent}from "./tutorial/tutorial.component"
// import {PassComponent} from "./pass/pass.component";
import {ComprasComponent} from "./compras/compras.component";
import {LugarComponent} from "./lugar/lugar.component";
import {WizardComponent} from "./wizard/wizard.component";
import {Wizard1Component} from "./wizard/wizard1.component";
import {PruebaComponent} from "./prueba/prueba.component";
// import {StarComponent} from "./star/star.component";
import {FirstscreenComponent} from "./firstscreent/firstscreent.component";
import { DropDownModule } from "nativescript-drop-down/angular";
// import{Wizard3Component} from "./wizard/wizard3.component";
import {RepassComponent} from "./repass/repass.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import {W1Component} from "./w1/w1.component";






@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        DropDownModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        LogComponent,
        SingupComponent,
        SplashComponent,
        ZonaComponent,
        ZonaiComponent,
        TutorialComponent,
        // PassComponent,
        ComprasComponent,
        LugarComponent,
        WizardComponent,
        Wizard1Component,
        PruebaComponent,
        // StarComponent
        FirstscreenComponent,
        // Wizard3Component,
        RepassComponent,
        W1Component
    
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
