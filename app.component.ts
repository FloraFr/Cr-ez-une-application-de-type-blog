import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Application Angular';

  posts = [
    {
      title: 'Premier post',
      createdAt: 'Wed Oct 05 2019 10:02:17',
      content: 'Trois dieux A, B et C s\'appellent Vrai, Faux et Aléatoire, pas dans l\'ordre. Vrai dit toujours la vérité. Faux ment toujours; quant à Aléatoire, il dit vrai ou faux au hasard.',
      loveIts: 1
    },
    {
      title: 'Second post',
      createdAt: 'Wed Oct 08 2019 15:54:21',
      content: 'Votre tâche consiste à déterminer l\'identité de A, B et C en posant trois questions avec réponse oui/non. Chaque question est posée à un seul dieu seulement.',
      loveIts: -1
    },
    {
      title: 'Troisième post',
      createdAt: 'Wed Oct 10 2019 18:25:25',
      content: 'Les dieux comprennent le français, mais répondent dans leur langue pour lequel les mots OUI et NON sont DA et JA, pas dans l\'ordre. Vous ne savez pas quel mot signifie quoi.',
      loveIts: 0
    }
  ];

  constructor() {}

}



