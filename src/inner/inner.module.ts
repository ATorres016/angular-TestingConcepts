import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InnerComponent } from '../inner/inner.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ InnerComponent],
  bootstrap:    [ InnerComponent ]
})
export class AppModule { }
