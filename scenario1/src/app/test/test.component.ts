import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`<div>
  <button (click)="greetHere(greeting)">Greet</button> 
  
            </div> `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public greeting = "Hello there";

  constructor() { }

  ngOnInit() {
  }
  
  greetHere(greeting){
    console.log(greeting);
  }
}
