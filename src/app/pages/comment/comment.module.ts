import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';


import { SnackbarService } from 'src/app/services/snackbar.service';
import { TitleModule } from 'src/app/shared/components/title/title.module';

import {MatCardModule} from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule, CommentRoutingModule,TitleModule,
    MatSnackBarModule, MatCardModule
  ],
  providers: [SnackbarService]
})
export class CommentModule { }
