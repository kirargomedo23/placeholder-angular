import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoComponent } from './photo.component';


import { TitleModule } from 'src/app/shared/components/title/title.module';
import { SnackbarService } from 'src/app/services/snackbar.service';

import {MatCardModule} from '@angular/material/card';

import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    CommonModule, PhotoRoutingModule ,TitleModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [SnackbarService]
})
export class PhotoModule { }
