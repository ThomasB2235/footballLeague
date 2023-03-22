import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/model/club.model';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent {

  public nomClub : any;
  public listeClub: Array<Club> = [

    { nom: 'Money F.C', couleur: 'rgb(255,177,43)', sound: './assets/sound/money.wav', ferveur: 20, logo: './assets/img/logos/moneyfc.png', fans: 60, president: 80, coach: 40 },
    { nom: 'Local United', couleur: 'rgb(0,74,173)', sound: './assets/sound/local.wav', ferveur: 70, logo: './assets/img/logos/localutd.png', fans: 30, president: 20, coach: 80 },
    { nom: 'La Faucheuse United', couleur: 'rgb(207,50,29)', sound: './assets/sound/faucheuse.wav', ferveur: 50, logo: './assets/img/logos/faucheuse.png', fans: 70, president: 10, coach: 70 },
    { nom: 'History F.C', couleur: 'rgb(39,105,190)', sound: './assets/sound/history.wav', ferveur: 50, logo: './assets/img/logos/history.png', fans: 90, president: 20, coach: 40 },
    { nom: 'Los Ninos Academy', couleur: 'rgb(0,191,99)', sound: './assets/sound/losninos.wav', ferveur: 50, logo: './assets/img/logos/losninos.png', fans: 50, president: 50, coach: 50 },
    { nom: 'North F. C.', couleur: 'rgb(255,255,0)', sound: './assets/sound/north.wav', ferveur: 20, logo: './assets/img/logos/north.png', fans: 80, president: 60, coach: 40 },
    { nom: 'Orange', couleur: 'rgb(230,118,27)', sound: './assets/sound/orange.wav', ferveur: 60, logo: './assets/img/logos/orange.png', fans: 80, president: 30, coach: 30 },
    { nom: 'Sparta Sport', couleur: 'rgb(140,82,255)', sound: './assets/sound/sparta.flac', ferveur: 90, logo: './assets/img/logos/sparta.png', fans: 30, president: 20, coach: 60 },
];

  constructor( private router: Router) { }

  ngOnInit() {
    this.nomClub = localStorage.getItem('club');
        
    let club = this.listeClub.find(club => club.nom === this.nomClub);
    console.log(club?.couleur)

  }
}
