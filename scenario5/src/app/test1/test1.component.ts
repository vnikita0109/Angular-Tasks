import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `<h2>
                From Grand Child
              </h2>
              <button (click)="firstSend()">Send to Super-parent</button>`,
  styles: []
})
export class Test1Component implements OnInit {

  @Output() public grandchildEvent=new EventEmitter();

  firstSend(){
    this.grandchildEvent.emit('I am here!');
  }

  constructor() { }

  ngOnInit() {
  }

}
