import { Component } from '@angular/core';
import { RestSourceData } from 'src/model/rest.datasource';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  userData = {}
  constructor(public data: RestSourceData){}
  


}