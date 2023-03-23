import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ENUM } from 'src/app/constantes/enum';
import { Club } from 'src/app/model/club.model';

@Component({
    selector: 'app-choix-equipe',
    templateUrl: './choix-equipe.component.html',
    styleUrls: ['./choix-equipe.component.css']
})
export class ChoixEquipeComponent {

    public listeClub: Array<Club> = ENUM.LISTECLUBS;
    public choixQuatreClubs: any;
    public choixClub: any = {};

    constructor( private router: Router) { }

    ngOnInit() {

        // Melange des equipes
        const shuffled = this.listeClub.sort(() => 0.5 - Math.random());

        // Choisir 4 clubs dans le tableau.
        this.choixQuatreClubs = shuffled.slice(0, 4);
    }

    choixDujoueur(club : Club) {
      
            if(this.choixClub.nom === club.nom){
               this.choixClub = {};
            } else{
            this.choixClub = club
            }

        const son = new Audio(club.sound);
        son.play();
        localStorage.setItem('club',club.nom);


    }
    AllerChoixEquipe() {
        this.router.navigate(['/choixJoueurs']);
    }
}
