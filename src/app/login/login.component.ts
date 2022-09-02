import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { ERRORSNACKBAR, SUCCESSNACKBAR } from '../shared/constantes/snackbar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  loginForm: FormGroup = this.formBuilder.group({});

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly snackBarService: SnackbarService
  ) { 
    
  }

  ngOnInit(): void {
    this.initialLoginForm();
  }

  private initialLoginForm(): void {
    this.loginForm =  this.formBuilder.group({
      user: [null, [Validators.required  ] ],
      password : [null, [Validators.required ] ]
    });
  }

  public login(){
    if(this.loginForm.invalid) {
      this.snackBarService.openSnackBar('Formulario inválido!','Error', 
      ERRORSNACKBAR, 'bottom', 'center');
      return;
    }

    const user = this.userLoginForm ;
    const password = this.passwordLoginForm;

    if( user != "admin@gmail.com" || password != "admin"){
      this.snackBarService.openSnackBar('Credenciales incorrectas!','Error', 
      ERRORSNACKBAR, 'bottom', 'center');
      return;
    }

    this.snackBarService.openSnackBar('Credenciales correcta!','Success', 
      SUCCESSNACKBAR, 'bottom', 'center');

    this.router.navigateByUrl('/pages');
  }

  private get userLoginForm() {
    return this.loginForm.get('user')?.value;
  }

  get passwordLoginForm(){
    return this.loginForm.get('password')?.value;
  }


}
