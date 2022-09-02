import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { SnackbarService } from '../services/snackbar.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, LoginRoutingModule, 
    FormsModule, ReactiveFormsModule,
    MatCardModule, MatDividerModule,MatProgressBarModule,
    MatButtonModule, MatInputModule, MatSnackBarModule
  ],
  providers: [SnackbarService]
})
export class LoginModule { }
