import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserI } from 'src/app/interfaces/user.interface';
import { PlaceholderService } from 'src/app/services/placeholder.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { ERRORSNACKBAR, SUCCESSNACKBAR } from 'src/app/shared/constantes/snackbar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['name', 'username', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource<UserI>();

  
  constructor(
    private readonly placeHolderService: PlaceholderService,
    private readonly dialog: MatDialog,
    private readonly snackBarService: SnackbarService

  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.placeHolderService.getList('users').subscribe((data:UserI []) => {
      this.dataSource.data = data;
      
    }, (err) => {
      this.snackBarService.openSnackBar('Ocurrió un error al obtener los usuarios', 'Error',
      ERRORSNACKBAR, 'bottom', 'center');
    } );
  }

  public openModal(user:UserI, action: string ){

    this.dialog.open(ModalConfirmationComponent , {
      data:{
        title: `${action=='update'?'Actualizar':'Eliminar'} usuario`,
        subtitle: 'Estas seguro(a) de continuar?'
      }
    }).afterClosed().subscribe( (selection: boolean) => {
      
        if( !selection) return;

        if(action == 'update'){
          //this.updateUser(user);
        }else{
          //this.deleteUser(user);
        }

    } );
  }

  public updateUser(user:UserI){
    /* this.placeHolderService.updateById('users',user.id,{ }).subscribe(()  => {

      this.getUsers();
    }, err  =>  {
      this.snackBarService.openSnackBar('Ocurrió un error al actualizar al usuario', 'Error',
      ERRORSNACKBAR, 'bottom', 'center');
    } ); */
  }

  public deleteUser(user:UserI){
    this.placeHolderService.deleteById('users',user.id).subscribe(()  => {

      this.snackBarService.openSnackBar(`Usuario ${user.name} eliminado ! `, 'Success',
      SUCCESSNACKBAR, 'bottom', 'center');
      this.getUsers();
    }, err  =>  {
      this.snackBarService.openSnackBar('Ocurrió un error al eliminar el usuario', 'Error',
      ERRORSNACKBAR, 'bottom', 'center');
    } );
  }

}
