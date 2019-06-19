import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
