import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
  From Child
              </h2>
              <button (click)="fireEvent()">Send to parent</button>`,
  styles: []
})
export class TestComponent implements OnInit {

  @Output() public childEvent=new EventEmitter();

  fireEvent(){
    this.childEvent.emit('I am here!');
  }

  constructor() { }

  ngOnInit() {
  }

}
