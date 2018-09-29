import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatOptionModule,  
  MatFormFieldControl,
  MatStepperIntl,
  MatProgressSpinnerModule,  
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent, DialogOverviewExampleDialogMaster, DialogOverviewExampleDialogMasterEdit } from 'src/master/master.component';
import { DetailComponent } from 'src/detail/detail.component';
import { MenuLeftComponent } from 'src/menu/menuleft.component';
import { MenuRightComponent } from 'src/menu/menuright.component';
import { FieldComponent, DialogOverviewExampleDialog, DialogOverviewExampleDialogEdit } from 'src/field/field.component';
import { RestSourceData } from 'src/model/rest.datasource';
import { NavbarMainComponent } from 'src/navbar/navbar.component';
import { AccountComponent } from 'src/admin/account.component';
import { UserInformationComponent } from 'src/admin/user.information.component';
import { RegisterComponent } from 'src/admin/register.component';
import { LoginComponent } from 'src/admin/login.component';
import { MomentModule } from 'angular2-moment';


@NgModule({
  declarations: [
    AppComponent, MasterComponent, DetailComponent, MenuLeftComponent, MenuRightComponent, FieldComponent, DialogOverviewExampleDialog, DialogOverviewExampleDialogEdit, DialogOverviewExampleDialogMaster, NavbarMainComponent, AccountComponent, UserInformationComponent, RegisterComponent, LoginComponent, DialogOverviewExampleDialogMasterEdit
  ],
  imports: [
    MomentModule, BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatProgressSpinnerModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatIconModule, MatGridListModule, 
    MatDividerModule, MatCardModule, MatTableModule, MatTooltipModule,  MatRadioModule,MatOptionModule,MatSelectModule, MatSliderModule,  MatInputModule,  
    MatDialogModule, MatMenuModule, MatProgressBarModule,MatSortModule, MatPaginatorModule, MatTabsModule, MatAutocompleteModule, MatDialogModule,MatStepperModule,
    RouterModule.forRoot([
      { path: "register", component: RegisterComponent },            
      { path: "login", component: LoginComponent },            
      { path: "master", component: MasterComponent },            
      { path: "detail", component: DetailComponent },            
      { path: "field", component: FieldComponent },            
      { path: "account", component: AccountComponent },            
      { path: "**", redirectTo: '/master' }  
    ]), 
  ],
  providers: [RestSourceData],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogOverviewExampleDialog, DialogOverviewExampleDialogEdit, DialogOverviewExampleDialogMaster, DialogOverviewExampleDialogMasterEdit
  ],
  
})
export class AppModule { }
