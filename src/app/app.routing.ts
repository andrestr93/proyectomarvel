// todo: IMPORTAR LOS MODULOS DE ANGULAR

import { ModuleWithProviders } from "@angular/core";

import { Routes , RouterModule } from "@angular/router";

//todo: INPORTAR COMPONENTES A LOS CUALES QUIERO HACER UNA PAGINA EXCLUSIVA

import { HomeComponent } from "./components/home/home.component";


// todo: array de rutas

const appRoutes: Routes = [


  {path: '' , component : HomeComponent},
  {path: 'home' , component : HomeComponent}

]


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);




