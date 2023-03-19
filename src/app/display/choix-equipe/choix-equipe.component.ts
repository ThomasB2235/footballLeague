import { Component } from '@angular/core';
import { Club } from 'src/app/model/club.model';

@Component({
	selector: 'app-choix-equipe',
	templateUrl: './choix-equipe.component.html',
	styleUrls: ['./choix-equipe.component.css']
})
export class ChoixEquipeComponent {



    public listeClub: Array<Club> = [
       
        { nom: 'Money F.C', couleur : 'rgb(255,177,43)', ferveur : 20, logo: './assets/img/logos/moneyfc.png', fans: 60, president: 80, coach: 40 },
        { nom: 'Local United', couleur : 'rgb(0,74,173)', ferveur : 70, logo: './assets/img/logos/localutd.png', fans: 30, president: 20, coach: 80 },
        { nom: 'La Faucheuse United', couleur : 'rgb(207,50,29)', ferveur : 50, logo: './assets/img/logos/faucheuse.png', fans: 70, president: 10, coach: 70 },
        { nom: 'History F.C', couleur : 'rgb(39,105,190)', ferveur : 50, logo: './assets/img/logos/history.png', fans: 90 , president: 20, coach: 40 },
        { nom: 'Los Ninos Academy', couleur : 'rgb(0,191,99)', ferveur : 50, logo: './assets/img/logos/losninos.png', fans: 50, president: 50, coach: 50 },
        { nom: 'North F. C.', couleur : 'rgb(255,255,0)', ferveur : 20, logo: './assets/img/logos/north.png', fans: 80, president: 60, coach: 40 },
        { nom: 'Orange', couleur : 'rgb(230,118,27)', ferveur : 60, logo: './assets/img/logos/orange.png', fans: 80, president: 30, coach: 30 },
        { nom: 'Sparta Sport', couleur : 'rgb(140,82,255)', ferveur : 90, logo: './assets/img/logos/sparta.png', fans: 30, president: 20, coach: 60 },
    ];


	constructor(

	) { }

	ngOnInit() {

	}
}
