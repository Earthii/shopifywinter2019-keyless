import { GithubService } from './../services/github.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss']
})
export class SearchComponent {
  repositories: any[] = [
    { name: 'test1', language: 'Ruby', latestTag: ' v1.0' },
    { name: 'test2', language: 'Ruby', latestTag: ' v2.0' },
    { name: 'test3', language: 'Ruby', latestTag: ' v3.0' },
    { name: 'test4', language: 'Ruby', latestTag: ' v4.0' },
    { name: 'test5', language: 'Ruby', latestTag: ' v5.0' }
  ];

  constructor(private github: GithubService) {}

  cleared() {
    this.repositories = [];
  }
}
