import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "../shared/shared.module";
import { PassRoutingModule } from "./pass-routing.module";
import { PassComponent } from "./pass.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PassRoutingModule,
        SharedModule
    ],
    declarations: [
        PassComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PassModule { }
