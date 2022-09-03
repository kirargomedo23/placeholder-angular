import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from 'src/app/services/placeholder.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(
    private readonly placeHolderService: PlaceholderService,
    private readonly snackBarService: SnackbarService
  ) { 
    
  }

  ngOnInit(): void {

  }

}
