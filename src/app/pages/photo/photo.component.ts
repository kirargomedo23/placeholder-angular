import { Component, OnInit } from '@angular/core';
import { PhotoI } from 'src/app/interfaces/photos.interface';
import { PlaceholderService } from 'src/app/services/placeholder.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ERRORSNACKBAR } from 'src/app/shared/constantes/snackbar';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  
  public listPhotos: PhotoI [] = [];

  constructor(
    private readonly placeHolderService: PlaceholderService,
    private readonly snackBarService: SnackbarService

  ) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  private getPhotos(){
    this.placeHolderService.getList('photos').subscribe( ( data :PhotoI[] ) => {
      this.listPhotos = data;
    }, err => {
      this.snackBarService.openSnackBar('Ocurrió un error al obtener los comentarios', 'Error',
      ERRORSNACKBAR, 'bottom', 'center');
    } );
  }

}
