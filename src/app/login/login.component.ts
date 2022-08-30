import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  loginForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder
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
      console.log('error invalid! ')
      return;
    }

    const user = this.userLoginForm ;
    const password = this.passwordLoginForm;

    if( user != "admin@gmail.com" || password != "admin"){
      console.log('Credenciales incorrectas');
    }

    console.log('success');
  }

  private get userLoginForm() {
    return this.loginForm.get('user')?.value;
  }

  get passwordLoginForm(){
    return this.loginForm.get('password')?.value;
  }


}
