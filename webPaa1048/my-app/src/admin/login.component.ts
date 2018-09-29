import { Component } from '@angular/core';
import { RestSourceData } from 'src/model/rest.datasource';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userData = {}
  constructor(public data: RestSourceData){}

  Post(){
      this.data.loginUser(this.userData);
  }
  

}