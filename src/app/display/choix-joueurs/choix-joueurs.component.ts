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

	public listeGK: Array<Joueur> = ENUM.LISTEGK;
	public choixDeuxGK: any;
	public choixGK: any = {};
	public validerChoixGK: boolean;

	public listeDEF : Array<Joueur> = ENUM.LISTEDEF
	public choixQuatreDEF : any;
	public choixDEF1 : any = {};
	public choixDEF2 : any = {};
	public validerChoixDEF : boolean;

	constructor(private router: Router) { }


	ngOnInit() {

		this.validerChoixGK = false;
		// Melange des GK
		const shuffled = this.listeGK.sort(() => 0.5 - Math.random());
		// Choisir é GK dans le tableau.
		this.choixDeuxGK = shuffled.slice(0, 2);

		this.validerChoixDEF = true;
		// Melange des DEF
		const shuffledDEF = this.listeDEF.sort(() => 0.5 - Math.random());
		// Choisir é GK dans le tableau.
		this.choixQuatreDEF = shuffledDEF.slice(0, 4);



		// Recupere le club choisi

		this.itemNomClub = localStorage.getItem('club');

		for (let i = 0; i < this.listeClub.length; i++) {

			if (this.listeClub[i].nom == this.itemNomClub) {
				this.choixClubPlayer = this.listeClub[i];
			}
		}


	}

	choixPlayerGK(gk: Joueur) {

		if (this.choixGK.nom === gk.nom) {
			this.choixGK = {};
		} else {
			this.choixGK = gk;
		}

		localStorage.setItem('gk', gk.nom);
	}
	validerGK() {
		this.validerChoixGK = true;
		this.validerChoixDEF = false;
	}

	choixPlayerDEF1(def: Joueur) {

		if (this.choixDEF1.nom === def.nom) {
			this.choixDEF1 = {};
		} else {
			this.choixDEF1 = def;
		}

		localStorage.setItem('def1', def.nom);
	}

	debuter() {

		this.router.navigate(['/partie']);
	}
}
