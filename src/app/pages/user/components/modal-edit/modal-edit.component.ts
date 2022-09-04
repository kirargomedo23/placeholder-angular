import { Component, OnInit } from '@angular/core';
import { AddressI, UserI } from 'src/app/interfaces/user.interface';
import { PlaceholderService } from 'src/app/services/placeholder.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ERRORSNACKBAR } from 'src/app/shared/constantes/snackbar';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {

  address :AddressI = {
    city: '',
    street:'',
    suite:'',
    zipcode: ''
  };

  user: UserI = {
    address: this.address,
    email: '',
    id:0,
    name: '',
    phone:'',
    username:''
  };

  constructor(
    private readonly placeHolderService: PlaceholderService,
    private readonly snackBarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.getUserById();
  }

  private getUserById(){
    this.placeHolderService.getById( 'users', 1).subscribe( (data:UserI) => {
      this.user = data;
    }, (err) => {
      this.snackBarService.openSnackBar('Ocurrió un error al obtener el usuario', 'Error',
      ERRORSNACKBAR, 'bottom', 'center');
    } );
  }

  public save(){

  }

}
