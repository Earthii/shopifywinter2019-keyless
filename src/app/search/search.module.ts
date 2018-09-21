import { GithubService } from './../services/github.service';
import { CommonModule } from '@angular/common';

import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchComponent, SearchBoxComponent, SearchResultsComponent],
  exports: [SearchComponent, SearchBoxComponent, SearchResultsComponent],
  providers: [GithubService]
})
export class SearchModule {}
