import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import {MatTableModule} from '@angular/material/table'; 

import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatMenuModule} from '@angular/material/menu';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TitleModule } from 'src/app/shared/components/title/title.module';
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule, UserRoutingModule,
    MatTableModule, TitleModule, MatMenuModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [SnackbarService]
})
export class UserModule { }
