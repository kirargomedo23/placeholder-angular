import { Component, OnInit } from '@angular/core';
import { CommentI } from 'src/app/interfaces/comments.interface';
import { PlaceholderService } from 'src/app/services/placeholder.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ERRORSNACKBAR } from 'src/app/shared/constantes/snackbar';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  public listComments: CommentI [] = [];

  constructor(
    private readonly placeHolderService: PlaceholderService,
    private readonly snackBarService: SnackbarService

  ) { 

  }

  ngOnInit(): void {
    this.getComments();
  }

  private getComments(){
    this.placeHolderService.getList('comments').subscribe(( data:CommentI[] ) => {
      this.listComments = data;
      
    }, (err) => {
      this.snackBarService.openSnackBar('Ocurrió un error al obtener los comentarios', 'Error',
      ERRORSNACKBAR, 'bottom', 'center');
    } );
  }

}
