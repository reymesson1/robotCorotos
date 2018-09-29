import { Component } from '@angular/core';
import { RestSourceData } from 'src/model/rest.datasource';

@Component({
  selector: 'userinformation',
  templateUrl: './user.information.component.html',
  styleUrls: ['./user.information.component.scss']
})
export class UserInformationComponent {

  userData = {}

  constructor(public data: RestSourceData){}

  ngOnInit(){   
    this.data.getUsers(); 
    setTimeout(() => {                
      this.userData = this.data.userData;
    }, 2000);    
  }

  Post(){
    this.data.setUsers(this.userData);
  }
}