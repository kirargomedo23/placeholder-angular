import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from 'src/app/services/placeholder.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(
    private readonly placeHolderService: PlaceholderService,
    private readonly snackBarService: SnackbarService

  ) { }

  ngOnInit(): void {
  }

}
