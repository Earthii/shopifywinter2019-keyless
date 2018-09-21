import { Component, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: ['search-box.component.scss']
})
export class SearchBoxComponent {
  @ViewChild('queryText')
  inputField;

  @Output()
  cleared: EventEmitter<any> = new EventEmitter();

  keyPressed(event) {
    const searchText: string = this.inputField.nativeElement.value;
    if (searchText !== '' && event.code === 'Enter') {
      this.search(searchText);
    } else if (searchText === '') {
      this.cleared.emit();
    }
  }

  search(text) {
    console.log('Do Search: ', text);
  }
}
