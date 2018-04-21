import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { Wizard3Component } from "./wizard3.component";

const routes: Routes = [
    { path: "", component: Wizard3Component }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class Wizard3RoutingModule { }
