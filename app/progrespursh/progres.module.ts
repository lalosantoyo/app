import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { ProgresRoutingModule } from "./progres-routing.module";
import { ProgresComponent} from "./progres.component";;
import { SlidesModule } from "../slidesModule/slides.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProgresRoutingModule,
        SlidesModule,
        SharedModule
    ],
    declarations: [
        ProgresComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProgresModule { }