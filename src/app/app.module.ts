import { NgModule } from '@angular/core';
import { SearchModule } from './search/search.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [AppComponent, FavoritesComponent],
  imports: [BrowserModule, SearchModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
