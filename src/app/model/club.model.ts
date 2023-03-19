import { Equipe } from "./equipe.model";

export class club {

    constructor(
        public nom: string,
        public couleur: string,
        public ferveur: number,
        public equipe: Equipe,
        public logo: string,
    ) {

    }

}