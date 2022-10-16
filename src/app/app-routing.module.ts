import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";


const routes : Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: "full" //cuando esté sin URL que caiga acá
    },
    {
        path: "region",
        component: PorRegionComponent
    },
    {
        path: "capital",
        component: PorCapitalComponent
    },
    {
        path: "pais/:id",
        component: VerPaisComponent
    },
    {
        path: "**", // cualquier otro path que no sea los que definimos
        redirectTo: "" //o podria ser llamar al componente 404
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule    //porque acá configuramos todo
    ],
})

export class AppRoutingModule { }