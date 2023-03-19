import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ChoixEquipeComponent } from '../choix-equipe/choix-equipe.component';

@Component({
	selector: 'app-page-principale',
	templateUrl: './page-principale.component.html',
	styleUrls: ['./page-principale.component.css']
})
export class PagePrincipaleComponent {
	constructor(private route: ActivatedRoute, private router: Router) {

	}
	public debuterPartie() {
		console.log('test');
		
this.router.navigate(['/choixEquipe']);

	}
}
