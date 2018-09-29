import { Component } from '@angular/core';
import { RestSourceData } from 'src/model/rest.datasource';

@Component({
  selector: 'menu-right',
  templateUrl: './menuright.component.html',
  styleUrls: ['./menuright.component.scss']
})
export class MenuRightComponent {
  constructor(public data: RestSourceData){}
  
    navbarData = {}  
    userData = {}
      
    ngOnInit(){    
    this.data.getFields();
    this.data.getUsers();  
      setTimeout(() => {
        for(let x=0;x<this.data.fields.length;x++){
          if(this.data.fields[x].category==this.data.userData.language){
            this.navbarData[this.data.fields[x].field] = this.data.fields[x].value                    
          }
        }
      }, 2000);
    }

    logoff(){
      this.data.logout();
    }
}