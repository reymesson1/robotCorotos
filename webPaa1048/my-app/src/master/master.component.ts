import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestSourceData } from 'src/model/rest.datasource';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Master } from "../model/master";
let global
@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent {
  global
  displayedColumns: string[] = ['position', 'date','title','name', 'weight', 'symbol', 'field', 'actions'];
  dataSource
  navbarData = {}    
  searchfield  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog, public data: RestSourceData) {}
  Edit(i){  
    global=i
    let data = this.data.master.filter((master)=>{
      return master._id.indexOf(i) !== -1
    })  
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogMasterEdit, {
      width: '550px'      
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  Delete(i){    
    let masterData = {"_id":i}
    this.data.setMasterRemove(masterData);    
  }
  toggle(i){
    let newindex;
    let temp = this.data.master.filter((master,index)=>{
        if(master._id==i){
          newindex=index
        }
    })
    this.data.master[newindex].status = !this.data.master[newindex].status    
  }
  Play(i){
    let newindex;
    let temp = this.data.master.filter((master,index)=>{
        if(master._id==i){
          newindex=index
        }
    })    
    let updateData = {"_id":i,"status":this.data.master[newindex].status}
    this.data.setMasterStatus(updateData);        
  }
  Pause(i){
    let newindex;
    let temp = this.data.master.filter((master,index)=>{
        if(master._id==i){
          newindex=index
        }
    })    
    let updateData = {"_id":i,"status":this.data.master[newindex].status}
    this.data.setMasterStatus(updateData);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercasematches
    this.dataSource.filter = filterValue;
  }    
  ngOnInit(){
    this.data.getFields(); 
    this.data.getMaster(); 
    setTimeout(() => {            
      this.dataSource = this.data.master;
      this.dataSource = new MatTableDataSource<any>(this.data.master);      
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
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogMaster, {
      width: '550px'      
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'addfield.component.html',
  styleUrls: ['addfield.component.scss'],
})
export class DialogOverviewExampleDialogMaster {
  nextDay : Date;
  fieldData : Master = {}
  navbarData = {}    
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isUploaded : boolean = false;
  url = [];
  reader : FileReader = new FileReader();
  nameImage = [];  
  files = [];
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogMaster>,
    public data: RestSourceData,
    private _formBuilder: FormBuilder
  ) {
    this.nextDay = new Date();
  }   
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
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(){      
    console.log(this.nextDay.toLocaleDateString());
    this.fieldData["date"] = this.nextDay.toLocaleDateString() + " " + this.nextDay.toLocaleTimeString();
    this.fieldData["url"] = [];
    this.fieldData["file"] = [];
    this.fieldData["nameImage"] = [];
    this.fieldData["pathImage"] = [];
    this.fieldData["status"] = false;         
    this.data.addMaster(this.fieldData);    
    for(let x=0,num=1000;x<this.files.length;x++,num+=3000){     
      setTimeout(() => {        
          this.fieldData["url"] = this.url[x];      
          this.fieldData["file"] = this.reader;                    
          this.fieldData["nameImage"] = this.nameImage[x];
          this.fieldData["pathImage"] = "./src/assets/upload/"+this.nameImage[x];
          this.data.addMasterPicture(this.fieldData);        
      }, num);      
    }    
    this.fieldData = {}    
  }

  onSelectFile(event) {        
    this.files = event.target.files
    for(let x=0,num=1000;x<this.files.length;x++,num+=3000){      
      setTimeout(() => {         
        if (this.files && this.files[x]) {
            this.nameImage.push(this.files[x].name);          
            this.reader.readAsDataURL(this.files[x]);
            this.reader.onload = (event) => {           
                let target: any = event.target;
                let content: string = target.result;          
                this.url.push(content); 
              }
        }                
      }, num);
    }    
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'addfield.component.html',
  styleUrls: ['addfield.component.scss'],
})
export class DialogOverviewExampleDialogMasterEdit {
  fieldData = {
    fullname: "",
    description: "",
    value:"",
    category:"English",
    field: ""
  } 
  navbarData = {}    
    
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogMasterEdit>,
    public data: RestSourceData,
    private _formBuilder: FormBuilder
  ) {} 
  ngOnInit(){
    let filtered = this.data.master.filter((master)=>{
      return master._id.indexOf(global) !== -1
    })[0]
    this.fieldData["_id"] = filtered._id
    this.fieldData["fullname"] = filtered.fullname
    this.fieldData["title"] = filtered.title
    this.fieldData["description"] = filtered.description
    this.fieldData["value"] = filtered.value
    this.fieldData["category"] = filtered.category
    this.fieldData["field"] = filtered.field
  }

  onClick(){     
    this.data.setMasterEdit(this.fieldData);     
  }

}