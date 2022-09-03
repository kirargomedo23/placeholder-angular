import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmationComponent } from './modal-confirmation.component';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button'; 



@NgModule({
  declarations: [ModalConfirmationComponent],
  imports: [
    CommonModule, MatButtonModule,MatDividerModule
  ],
  exports: [ModalConfirmationComponent]
})
export class ModalConfirmationModule { }
