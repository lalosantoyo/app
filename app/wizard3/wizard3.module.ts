import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { Wizard3RoutingModule } from "./wizard3-routing.module";
import { Wizard3Component } from "./wizard3.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        Wizard3RoutingModule,
        SharedModule
    ],
    declarations: [
        Wizard3Component
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class Wizard3Module { }
