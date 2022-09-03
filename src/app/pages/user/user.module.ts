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
import { ModalConfirmationModule } from 'src/app/shared/components/modal-confirmation/modal-confirmation.module';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    UserComponent,
    ModalEditComponent,
    SearchComponent
  ],
  imports: [
    CommonModule, UserRoutingModule,
    MatTableModule, TitleModule, MatMenuModule,
    MatButtonModule, ModalConfirmationModule, MatDialogModule,
    MatSnackBarModule
  ],
  providers: [SnackbarService]
})
export class UserModule { }
