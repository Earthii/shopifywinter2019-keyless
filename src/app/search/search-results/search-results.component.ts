import { Component } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: 'search-results.component.html',
  styleUrls: ['search-results.component.scss']
})
export class SearchResultsComponent {
  repositories: any[] = [
    { name: 'test1', language: 'Ruby', latestTag: ' v1.0' },
    { name: 'test2', language: 'Ruby', latestTag: ' v2.0' },
    { name: 'test3', language: 'Ruby', latestTag: ' v3.0' },
    { name: 'test4', language: 'Ruby', latestTag: ' v4.0' },
    { name: 'test5', language: 'Ruby', latestTag: ' v5.0' }
  ];

  constructor() {
    console.log(this.repositories);
  }
}
