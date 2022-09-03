import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { SnackbarService } from 'src/app/services/snackbar.service';


import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { TitleModule } from 'src/app/shared/components/title/title.module';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule, TodoRoutingModule, TitleModule,
    MatSnackBarModule
  ],
  providers: [SnackbarService]
})
export class TodoModule { }
