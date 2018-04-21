import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { Wizard2RoutingModule } from "./wizard2-routing.module";
import { Wizard2Component } from "./wizard2.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        Wizard2RoutingModule,
        SharedModule
    ],
    declarations: [
        Wizard2Component
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class Wizard2Module { }
