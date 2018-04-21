import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SliderRoutingModule } from "./slider-routing.module";
import { SliderComponent } from "./slider.component";
import { SlidesModule } from "../slidesModule/slides.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SliderRoutingModule,
        SlidesModule
    ],
    declarations: [
        SliderComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SliderModule { }
