import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() openPage: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  setPage(page: String) {
    this.openPage.emit(page);
  }
}
