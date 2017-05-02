import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';
import { HttpModule, JsonpModule} from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { DocComponent } from './components/doc/doc.component';
import { AppComponent }  from './app.component';
import {MessagesModule,GrowlModule,AccordionModule,TabViewModule, PanelModule} from 'primeng/primeng';
import {Tab} from './components/admin/manager-user/tab';
import {Tabs} from './components/admin/manager-user/tabs';
import {AdminComponent} from './components/admin/general/admin.component';
import {ProjectComponent} from './components/admin/project/admin.project.component';
import {RegisterUserComponent} from './components/admin/register-user/admin.register.user.component';
import {ManagerUserComponent} from './components/admin/manager-user/admin.manager.user.component';
import { RouterModule, Routes} from '@angular/router';
import {routing} from './routes.general';
import {admin_routing} from './routes.general';

@NgModule({
  imports:[
  DataTableModule,
  BrowserModule,
  BrowserAnimationsModule,
  TabViewModule,
  FormsModule,
  GrowlModule,
  PanelModule, 
  HttpModule, 
  JsonpModule,
  MessagesModule,
  AccordionModule,
  routing,
  admin_routing],
  declarations: [
                  AppComponent,
                  LoginComponent,
                  DocComponent,
                  AdminComponent,
                  RegisterUserComponent,
                  ManagerUserComponent,
                  ProjectComponent,
                  Tab,
                  Tabs
                ],
  bootstrap:    [AppComponent]
})
export class AppModule { }
