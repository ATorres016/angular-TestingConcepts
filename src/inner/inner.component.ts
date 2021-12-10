import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent{
    @Input() dogName: String;
    @Output() updateDogName :EventEmitter<String> = new EventEmitter<String>();
    newDogName: String;
    dogChanged: boolean = false;
    
    update(){
      this.newDogName = document.getElementById('dogForm')[0].value;
      console.log(this.newDogName);
      this.updateDogName.emit(this.newDogName);
      this.dogChanged = true;
    }
}