import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from 'src/app/services/placeholder.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(
    private readonly placeHolderService: PlaceholderService,
    private readonly snackBarService: SnackbarService

  ) { }

  ngOnInit(): void {
  }

}
