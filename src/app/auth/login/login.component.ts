import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilerd: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    if ( this.form.valid){
      const value = this.form.value;
      this.authService.login(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert('No es valido');
      });
    }
  }

  loginApi(){
    this.authService.loginRequestApi('joan@joan.com','123456')
      .subscribe(data => {
        console.log(data);
      });
  }

  private buildForm() {
    this.form = this.formBuilerd.group({
      email: ['', [ Validators.required]],
      password: ['', [ Validators.required]],
    });
  }

}
