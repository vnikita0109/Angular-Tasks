import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() public childEvent=new EventEmitter();

  secondSend(value){
    this.childEvent.emit(value);
  }

}
