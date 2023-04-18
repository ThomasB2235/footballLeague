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

	public listeDEF : Array<Joueur> = ENUM.LISTEDEF;
	public choixQuatreDEF1 : any;
	public choixQuatreDEF2 : any;
	public choixDEF1 : any = {};
	public choixDEF2 : any = {};
	public validerChoixDEF1 : boolean;
	public validerChoixDEF2 : boolean;

	public listeMIL : Array<Joueur> = ENUM.LISTEMIL;
	public validerChoixMIL1 : boolean;
	public validerChoixMIL2 : boolean;
	public choixQuatreMIL1 : any;
	public choixQuatreMIL2 : any;
	public choixMIL1 : any = {};
	public choixMIL2 : any = {}; 

	public listeBU : Array<Joueur> = ENUM.LISTEBU;
	public choixDeuxBU: any;
	public choixBU : any = {};
	public validerChoixBU : boolean;

	public validerEquipe : boolean;

	constructor(private router: Router) {

		// Recupère le club choisi
		this.itemNomClub = localStorage.getItem('club');

		for (let i = 0; i < this.listeClub.length; i++) {

			if (this.listeClub[i].nom == this.itemNomClub) {
				this.choixClubPlayer = this.listeClub[i];
			}
		}

		this.validerChoixGK = false;
		// Melange des GK
		const shuffled = this.listeGK.sort(() => 0.5 - Math.random());
		// Choisir du GK dans le tableau.
		this.choixDeuxGK = shuffled.slice(0, 2);

		this.validerChoixDEF1 = true;
		// Melange des DEF
		const shuffledDEF1 = this.listeDEF.sort(() => 0.5 - Math.random());
		// Choisir du DEF dans le tableau.
		this.choixQuatreDEF1 = shuffledDEF1.slice(0, 4);

		this.validerChoixBU = true;
		// Melange des BU
		const shuffledBU = this.listeBU.sort(() => 0.5 - Math.random());
		// Choisir du BU dans le tableau.
		this.choixDeuxBU = shuffledBU.slice(0, 2);

		this.validerEquipe = false;

	 }


	ngOnInit() {

		

		this.validerChoixDEF2 = true;

		
		this.validerChoixMIL1 = true;
		// Melange des MIL
		const shuffledMIL1 = this.listeMIL.sort(() => 0.5 - Math.random());
		// Choisir du MIL dans le tableau.
		this.choixQuatreMIL1 = shuffledMIL1.slice(0, 4);

		this.validerChoixMIL2 = true;

		this.listeMIL = this.listeMIL.splice(this.choixMIL1);

		// Melange des MIL
		const shuffledMIL2 = this.listeMIL.sort(() => 0.5 - Math.random());
		// Choisir du MIL dans le tableau.
		this.choixQuatreMIL2 = shuffledMIL2.slice(0, 4);

		

		

	}

	nouvelleListeDef2() {

		console.log(this.listeDEF);

		let index = this.listeDEF.indexOf(this.choixDEF1);
		console.log(index);
		
		

		const shuffledDEF2 = this.listeDEF.sort(() => 0.5 - Math.random());
		// Choisir du DEF dans le tableau.
		this.choixQuatreDEF2 = shuffledDEF2.slice(0, 4);

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
		this.validerChoixDEF1 = false;
	}

	choixPlayerDEF1(def: Joueur) {

		if (this.choixDEF1.nom === def.nom) {
			this.choixDEF1 = {};
		} else {
			this.choixDEF1 = def;
		}

		localStorage.setItem('def1', def.nom);
	}

	validerDEF1() {
		this.validerChoixDEF1 = true;
		this.validerChoixDEF2 = false;
		this.nouvelleListeDef2();
	}

	choixPlayerDEF2(def: Joueur) {

		if (this.choixDEF2.nom === def.nom) {
			this.choixDEF2 = {};
		} else {
			this.choixDEF2 = def;
		}

		localStorage.setItem('def2', def.nom);
	}

	validerDEF2() {
		this.validerChoixDEF2 = true;
		this.validerChoixMIL1 = false;
	}

	choixPlayerMIL1(mil: Joueur) {

		if (this.choixMIL1.nom === mil.nom) {
			this.choixMIL1 = {};
		} else {
			this.choixMIL1 = mil;
		}

		localStorage.setItem('mil1', mil.nom);
	}

	validerMIL1() {
		this.validerChoixMIL1 = true;
		this.validerChoixMIL2 = false;
	}

	choixPlayerMIL2(mil: Joueur) {

		if (this.choixMIL2.nom === mil.nom) {
			this.choixMIL2 = {};
		} else {
			this.choixMIL2 = mil;
		}

		localStorage.setItem('mil2', mil.nom);
	}

	validerMIL2() {
		this.validerChoixMIL2 = true;
		this.validerChoixBU = false;
	}

	choixPlayerBU(bu: Joueur) {

		if (this.choixBU.nom === bu.nom) {
			this.choixBU = {};
		} else {
			this.choixBU = bu;
		}

		localStorage.setItem('bu', bu.nom);
	}

	validerBU() {
		this.validerEquipe = true;
		this.validerChoixBU = true;
	}

	debuter() {

		this.router.navigate(['/partie']);
	}
}
