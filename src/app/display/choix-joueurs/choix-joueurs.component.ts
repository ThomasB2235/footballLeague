import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix-joueurs',
  templateUrl: './choix-joueurs.component.html',
  styleUrls: ['./choix-joueurs.component.css']
})
export class ChoixJoueursComponent {

  constructor( private router: Router) { }


  debuter() {

    this.router.navigate(['/partie']);
  }
}
