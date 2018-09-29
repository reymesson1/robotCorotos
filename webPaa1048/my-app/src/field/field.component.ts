import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestSourceData } from 'src/model/rest.datasource';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
let global
@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  title = 'my-app';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'field', 'actions'];
  dataSource
  navbarData = {}    
  searchfield
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog, public data: RestSourceData) {}  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercasematches
    this.dataSource.filter = filterValue;
  }
  ngOnInit(){
    this.data.getFields(); 
    setTimeout(() => {      
      this.dataSource = this.data.fields;
      this.dataSource = new MatTableDataSource<any>(this.data.fields);      
      this.dataSource.sort = this.sort;  
      this.dataSource.paginator = this.paginator;
    }, 2000);
    setTimeout(() => {
      for(let x=0;x<this.data.fields.length;x++){
        if(this.data.fields[x].category==this.data.userData.language){
          this.navbarData[this.data.fields[x].field] = this.data.fields[x].value                    
        }
      }
    }, 2000);
  }  
  openDialog(): void {    
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px'      
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  Edit(i){    
    global=i
    let data = this.data.fields.filter((master)=>{
      return master._id.indexOf(i) !== -1
    })    
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogEdit, {
      width: '350px'      
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  Delete(i){
    this.data.removeField(i);
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'addfield.component.html',
})
export class DialogOverviewExampleDialog {

  fieldData = {
    description:"",
    value:"",
    category:"English",
    field: ""
  }
  navbarData = {}    
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    public data: RestSourceData
  ) {}   
  ngOnInit(){
    if(this.data.fields.length==0){
      setTimeout(() => {
        for(let x=0;x<this.data.fields.length;x++){
          if(this.data.fields[x].category==this.data.userData.language){
            this.navbarData[this.data.fields[x].field] = this.data.fields[x].value                    
          }
        }
      }, 1000);
    }else{
      for(let x=0;x<this.data.fields.length;x++){
        if(this.data.fields[x].category==this.data.userData.language){
          this.navbarData[this.data.fields[x].field] = this.data.fields[x].value                    
        }
      }
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(){  
    this.data.addField(this.fieldData);
    this.fieldData = {
      description:"",
      value:"",
      category:"English",
      field: ""    
    }
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'addfield.component.html',
})
export class DialogOverviewExampleDialogEdit {

  fieldData = {
    description: "",
    value:"",
    category:"English",
    field: ""
  }
  navbarData = {}    
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogEdit>,
    public data: RestSourceData
  ) {}   
  ngOnInit(){        
    
    if(this.data.fields.length==0){      
      setTimeout(() => {
        for(let x=0;x<this.data.fields.length;x++){
          if(this.data.fields[x].category==this.data.userData.language){
            this.navbarData[this.data.fields[x].field] = this.data.fields[x].value                    
          }
        }
      }, 1000);
    }else{
      let filtered = this.data.fields.filter((master)=>{
        return master._id.indexOf(global) !== -1
      })[0]
      this.fieldData["_id"] = filtered._id
      this.fieldData["description"] = filtered.description
      this.fieldData["value"] = filtered.value
      this.fieldData["category"] = filtered.category
      this.fieldData["field"] = filtered.field

      for(let x=0;x<this.data.fields.length;x++){
        if(this.data.fields[x].category==this.data.userData.language){
          this.navbarData[this.data.fields[x].field] = this.data.fields[x].value                    
        }
      }
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(){  
    
    this.data.updateField(this.fieldData);
    this.fieldData = {
      description:"",
      value:"",
      category:"English",
      field: ""    
    }
  }
}

