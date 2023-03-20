import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoixEquipeComponent } from './display/choix-equipe/choix-equipe.component';
import { ChoixJoueursComponent } from './display/choix-joueurs/choix-joueurs.component';
import { PagePrincipaleComponent } from './display/page-principale/page-principale.component';
import { PartieComponent } from './display/partie/partie.component';

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
    {
        path: 'choixJoueurs',
        component: ChoixJoueursComponent,
    },
    {
        path: 'partie',
        component: PartieComponent,
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
