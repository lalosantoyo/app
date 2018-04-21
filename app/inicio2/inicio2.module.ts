import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { Inicio2RoutingModule } from "./inicio2-routing.module";
import { Inicio2Component } from "./inicio2.component";;
import { SlidesModule } from "../slidesModule/slides.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        Inicio2RoutingModule,
        SlidesModule,
        SharedModule
    ],
    declarations: [
        Inicio2Component
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class Inicio2Module { }