import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  text = ""
  counter = 5;
  name = 'Angular';
  validEmail = true;
  validPassword = true;
  boxChecked = true;
  dogName: string = "Snickers";
  regExpEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  regExpPass = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$");
  
  saveData(dog: string){
    this.dogName = dog;
  }


  transformText(){
    this.text =  document.getElementById('f')[0].value;
  }

  incrementCounter(){
    this.counter++;
  }
  validateEmail(){
    let email = document.getElementById('form')[0].value;
    console.log(email);
    this.validEmail = this.regExpEmail.test(email);
  }
  validatePassword(){
    let password = document.getElementById('form')[1].value;
    let Cpassword = document.getElementById('form')[2].value;
    console.log("Password: " + password);
    console.log("Confirm password: " + Cpassword);
    if(password !== Cpassword) this.validPassword = false;
    
    this.validPassword = this.regExpPass.test(password);
  }

  validateCheckBox() {
    const cb = document.querySelector('#accept');
    //console.log("Box Checked: " + cb.value);
  }

}

