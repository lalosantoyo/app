import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { Inicio2Component } from "./inicio2.component";

const routes: Routes = [
    { path: "", component: Inicio2Component }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class Inicio2RoutingModule { }
