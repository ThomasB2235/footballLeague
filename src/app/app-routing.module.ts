import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoixEquipeComponent } from './display/choix-equipe/choix-equipe.component';
import { PagePrincipaleComponent } from './display/page-principale/page-principale.component';

const routes: Routes = [];

export const appRouteList: Routes = [
    {
        path: 'pagePrincipale',
        component: PagePrincipaleComponent,
    },
	{
        path: 'choixEquipe',
        component: ChoixEquipeComponent,
    },
 
];
@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRouteList)
    ]
})
export class AppRoutingModule {
}
