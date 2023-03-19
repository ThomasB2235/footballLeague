import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './display/map/map.component';
import { PlayerBoardComponent } from './display/player-board/player-board.component';
import { PagePrincipaleComponent } from './display/page-principale/page-principale.component';
import { ChoixEquipeComponent } from './display/choix-equipe/choix-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PlayerBoardComponent,
    PagePrincipaleComponent,
    ChoixEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
