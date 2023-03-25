import { Club } from "../model/club.model";
import { Joueur } from "../model/joueur.model";

export class ENUM {

    public static LISTECLUBS: Array<Club> = [

        { nom: 'Money F.C', couleur: 'rgb(255,177,43)', sound: './assets/sound/money.wav', ferveur: 20, logo: './assets/img/logos/moneyfc.png', fans: 60, president: 80, coach: 40 },
        { nom: 'Local United', couleur: 'rgb(0,74,173)', sound: './assets/sound/local.wav', ferveur: 70, logo: './assets/img/logos/localutd.png', fans: 30, president: 20, coach: 80 },
        { nom: 'La Faucheuse United', couleur: 'rgb(207,50,29)', sound: './assets/sound/faucheuse.wav', ferveur: 50, logo: './assets/img/logos/faucheuse.png', fans: 70, president: 10, coach: 70 },
        { nom: 'History F.C', couleur: 'rgb(39,105,190)', sound: './assets/sound/history.wav', ferveur: 50, logo: './assets/img/logos/history.png', fans: 90, president: 20, coach: 40 },
        { nom: 'Los Ninos Academy', couleur: 'rgb(0,191,99)', sound: './assets/sound/losninos.wav', ferveur: 50, logo: './assets/img/logos/losninos.png', fans: 50, president: 50, coach: 50 },
        { nom: 'North F. C.', couleur: 'rgb(255,255,0)', sound: './assets/sound/north.wav', ferveur: 20, logo: './assets/img/logos/north.png', fans: 80, president: 60, coach: 40 },
        { nom: 'Orange', couleur: 'rgb(230,118,27)', sound: './assets/sound/orange.wav', ferveur: 60, logo: './assets/img/logos/orange.png', fans: 80, president: 30, coach: 30 },
        { nom: 'Sparta Sport', couleur: 'rgb(140,82,255)', sound: './assets/sound/sparta.flac', ferveur: 90, logo: './assets/img/logos/sparta.png', fans: 30, president: 20, coach: 60 },
    ];

    public static LISTEGK: Array<Joueur> = [
        { nom: 'Fabio', prenom: 'Luis', image: './assets/img/persos/gk/Fabio.png', age: 34, nationalite: 'Colombien', hygieneVie: 30, mental: 60, attraitFans: 76, qualite: 40, valeur: 10 },
        { nom: 'Kohler', prenom: 'Kevin', image: './assets/img/persos/gk/Kohler.png', age: 25, nationalite: 'Allemand', hygieneVie: 78, mental: 45, attraitFans: 68, qualite: 55, valeur: 20 },
        { nom: 'Malana', prenom: 'Steeven', image: './assets/img/persos/gk/Malana.png', age: 30, nationalite: 'Français', hygieneVie: 50, mental: 33, attraitFans: 33, qualite: 33, valeur: 13 },
        { nom: 'VanDerBrook', prenom: 'Ludwig', image: './assets/img/persos/gk/VanderBrook.png', age: 32, nationalite: 'Hollandais', hygieneVie: 60, mental: 70, attraitFans: 50, qualite: 70, valeur: 18 }
    ];

    public static LISTEDEF: Array<Joueur> = [
        { nom: 'Bradovic', prenom: 'Lovro', image: './assets/img/persos/def/Bradovic.png', age: 22, nationalite: 'Croate', hygieneVie: 50, mental: 60, attraitFans: 80, qualite: 70, valeur: 30 },
        { nom: 'Chialo', prenom: 'Lucas', image: './assets/img/persos/def/LucasChialo.png', age: 34, nationalite: 'Bresilien', hygieneVie: 63, mental: 10, attraitFans: 66, qualite: 80, valeur: 25 },
        { nom: 'Manson', prenom: 'Peter', image: './assets/img/persos/def/Manson.png', age: 31, nationalite: 'Suédois', hygieneVie: 90, mental: 73, attraitFans: 20, qualite: 45, valeur: 12 },
        { nom: 'McNulthy', prenom: 'Brandon', image: './assets/img/persos/def/McNulthy.png', age: 25, nationalite: 'Anglais', hygieneVie: 25, mental: 82, attraitFans: 45, qualite: 63, valeur: 35 },
        { nom: 'Pronto', prenom: 'Lucas', image: './assets/img/persos/def/Pronto.png', age: 27, nationalite: 'Italien', hygieneVie: 72, mental: 50, attraitFans: 90, qualite: 73, valeur: 43 },
        { nom: 'Vlam', prenom: 'Jaap', image: './assets/img/persos/def/Vlam.png', age: 30, nationalite: 'Hollandais', hygieneVie: 83, mental: 95, attraitFans: 40, qualite: 53, valeur: 33 },
    ];

    public static LISTEMIL: Array<Joueur> = [
        { nom: 'Fabio', prenom: 'Luis', image: '', age: 34, nationalite: 'Colombien', hygieneVie: 30, mental: 60, attraitFans: 76, qualite: 40, valeur: 10 },
        { nom: '', prenom: '', image: '', age: 34, nationalite: '', hygieneVie: 33, mental: 33, attraitFans: 33, qualite: 33, valeur: 33 },
        { nom: '', prenom: '', image: '', age: 34, nationalite: '', hygieneVie: 33, mental: 33, attraitFans: 33, qualite: 33, valeur: 33 },
        { nom: '', prenom: '', image: '', age: 34, nationalite: '', hygieneVie: 33, mental: 33, attraitFans: 33, qualite: 33, valeur: 33 },
        { nom: '', prenom: '', image: '', age: 34, nationalite: '', hygieneVie: 33, mental: 33, attraitFans: 33, qualite: 33, valeur: 33 },
        { nom: '', prenom: '', image: '', age: 34, nationalite: '', hygieneVie: 33, mental: 33, attraitFans: 33, qualite: 33, valeur: 33 },

    ];
    public static LISTEBU: Array<Joueur> = [
        { nom: 'Fabio', prenom: 'Luis', image: '', age: 34, nationalite: 'Colombien', hygieneVie: 30, mental: 60, attraitFans: 76, qualite: 40, valeur: 10 },
        { nom: '', prenom: '', image: '', age: 34, nationalite: '', hygieneVie: 33, mental: 33, attraitFans: 33, qualite: 33, valeur: 33 },
        { nom: '', prenom: '', image: '', age: 34, nationalite: '', hygieneVie: 33, mental: 33, attraitFans: 33, qualite: 33, valeur: 33 },
        { nom: '', prenom: '', image: '', age: 34, nationalite: '', hygieneVie: 33, mental: 33, attraitFans: 33, qualite: 33, valeur: 33 },
    ]
}