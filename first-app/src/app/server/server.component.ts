import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  log: Array<string> = [];
  isLogVisible: boolean = false;

  constructor() {

  }

  ngOnInit() {
  }

  handleClick() {
    this.log.push((new Date()).toLocaleTimeString());
    this.isLogVisible = true;
  }
}
