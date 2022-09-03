import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataConfirmationI } from 'src/app/interfaces/dataConfirmation.interface';



@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss']
})
export class ModalConfirmationComponent implements OnInit {

  info : DataConfirmationI = {
    title: '',
    subtitle:''
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DataConfirmationI,
    private readonly dialogRef: MatDialogRef<any>) { 
    
  }

  ngOnInit(): void {
    this.info = this.data;
  }

  getSelection(value: boolean){
    this.dialogRef.close(value);
  }

}
