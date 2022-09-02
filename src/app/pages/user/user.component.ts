import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserI } from 'src/app/interfaces/user.interface';
import { PlaceholderService } from 'src/app/services/placeholder.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ERRORSNACKBAR } from 'src/app/shared/constantes/snackbar';

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

  public updateUser(user:UserI){
    
  }

  public deleteUser(user:UserI){

  }

}
