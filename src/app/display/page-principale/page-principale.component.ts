import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-page-principale',
	templateUrl: './page-principale.component.html',
	styleUrls: ['./page-principale.component.css']
})
export class PagePrincipaleComponent {

	constructor(private router: Router) {}

	public debuterPartie() {

		this.router.navigate(['/choixEquipe']);

	}
}
