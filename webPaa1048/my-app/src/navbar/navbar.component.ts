import { Component } from '@angular/core';
import { RestSourceData } from 'src/model/rest.datasource';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarMainComponent {
  
  constructor(public data: RestSourceData){}

  navbarData = {}  
  userData = {}

  ngOnInit(){ 
    this.data.getUsers();
    this.data.getFields();
    setTimeout(() => {      
      this.data
      for(let x=0;x<this.data.fields.length;x++){
        if(this.data.fields[x].category==this.data.userData.language){
          this.navbarData[this.data.fields[x].field] = this.data.fields[x].value                    
        }
      }
    }, 2000);
  }

}