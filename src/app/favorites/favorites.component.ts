import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.component.html',
  styleUrls: ['favorites.component.scss']
})
export class FavoritesComponent {
  repositories: any[] = [
    { name: 'fav1', language: 'Ruby', latestTag: ' v1.0' }
  ];
}
