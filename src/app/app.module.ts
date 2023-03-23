import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './display/map/map.component';
import { PlayerBoardComponent } from './display/player-board/player-board.component';
import { PagePrincipaleComponent } from './display/page-principale/page-principale.component';
import { ChoixEquipeComponent } from './display/choix-equipe/choix-equipe.component';
import { ChoixJoueursComponent } from './display/choix-joueurs/choix-joueurs.component';
import { PartieComponent } from './display/partie/partie.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PlayerBoardComponent,
    PagePrincipaleComponent,
    ChoixEquipeComponent,
    ChoixJoueursComponent,
    PartieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
