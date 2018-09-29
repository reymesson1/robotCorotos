import { Component } from '@angular/core';
import { RestSourceData } from 'src/model/rest.datasource';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  userData = {}

  constructor(public data: RestSourceData){}

  Post(){   
    
    this.data.sendUserRegistration(this.userData);
  }

}