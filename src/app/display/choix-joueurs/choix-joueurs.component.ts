import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ENUM } from 'src/app/constantes/enum';
import { Club } from 'src/app/model/club.model';
import { Joueur } from 'src/app/model/joueur.model';

@Component({
	selector: 'app-choix-joueurs',
	templateUrl: './choix-joueurs.component.html',
	styleUrls: ['./choix-joueurs.component.css']
})
export class ChoixJoueursComponent {

	public listeClub: Array<Club> = ENUM.LISTECLUBS;
	public itemNomClub: any;
	public choixClubPlayer: Club;
	public listeGK : Array<Joueur> = ENUM.LISTEGK;
	public choixDeuxGK : any;
	public choixGK : Joueur;
	constructor(private router: Router) { }


	ngOnInit() {

		console.log(this.listeGK);
		
		// Melange des GK
        const shuffled = this.listeGK.sort(() => 0.5 - Math.random());

        // Choisir é GK dans le tableau.
        this.choixDeuxGK = shuffled.slice(0, 2);

		// Recupere le club choisi

		this.itemNomClub = localStorage.getItem('club');

		for (let i = 0; i < this.listeClub.length; i++) {

			if (this.listeClub[i].nom == this.itemNomClub) {
				this.choixClubPlayer = this.listeClub[i];
			}
		}


	}

	debuter() {

		this.router.navigate(['/partie']);
	}
}
