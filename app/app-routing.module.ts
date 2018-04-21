import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {LogComponent} from "./log/log.component";
import{SingupComponent} from "./singup/singup.component";
import{SplashComponent} from "./splash/splash.component";
import{ZonaComponent} from "./zona/zona.component";
import{ZonaiComponent} from "./zonai/zonai.component";
import{TutorialComponent}from "./tutorial/tutorial.component";
import{PassComponent}from "./pass/pass.component";
import {ComprasComponent} from "./compras/compras.component";
import{LugarComponent} from "./lugar/lugar.component";
import{WizardComponent} from "./wizard/wizard.component";
import{Wizard1Component} from "./wizard/wizard1.component";

import {PruebaComponent} from "./prueba/prueba.component";
// import {StarComponent} from "./star/star.component"
// import{ChatComponent } from "./chat/chat.component";
import {FirstscreenComponent} from "./firstscreent/firstscreent.component";
import {RepassComponent} from "./repass/repass.component";
import {W1Component} from "./w1/w1.component";




const routes: Routes = [
    { path: "", redirectTo: "/inicio2", pathMatch: "full" },
    { path: "sliderp", loadChildren: "./slider/slider.module#SliderModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "wizard2", loadChildren: "./wizard2/wizard2.module#Wizard2Module" },
    { path: "wizard3", loadChildren: "./wizard3/wizard3.module#Wizard3Module" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
    { path: "inicio", loadChildren: "./inicio/inicio.module#InicioModule" },
    { path: "inicio2", loadChildren: "./inicio2/inicio2.module#Inicio2Module" },
    { path: "progres", loadChildren: "./progrespursh/progres.module#ProgresModule" },
 
    { path: "pass", loadChildren: "./pass/pass.module#PassModule" },
    { path: "log", component: LogComponent },
    
    { path: "w1", component: W1Component },
    { path: "splash", component: SplashComponent },
    {path: "singup", component:SingupComponent},
    {path: "zona", component:ZonaComponent},
    {path: "zonai", component:ZonaiComponent},
    {path: "tutorial", component:TutorialComponent},
    {path: "compras", component:ComprasComponent},
    {path: "lugar", component:LugarComponent},
    {path: "wizard", component:WizardComponent},
    {path: "wizard1", component:Wizard1Component},
    // {path: "wizard3", component:Wizard3Component},
    {path: "prueba", component:PruebaComponent},
    // {path: "star", component:StarComponent},
    // {path: "chat", component:ChatComponent}
    {path: "firstscreen", component:FirstscreenComponent},
    {path: "repass", component:RepassComponent},


];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
