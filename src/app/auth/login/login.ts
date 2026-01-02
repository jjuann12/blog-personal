import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm: FormGroup

  constructor (private fb: FormBuilder, private router: Router){

    this.loginForm = this.fb.group({
        user: ['', Validators.required],
        
        password: ['', Validators.required],

    });

  }

  get User () {
    return this.loginForm.get('user')
  }
  get Password () {
    return this.loginForm.get('user')
  }

  onLogin(event:Event){
    const username = this.loginForm.get('user')?.value

    if(username === 'name'){
      this.router.navigate(['/'])
    }
    else {
      alert('no esta registrado este usuario hermanazo')
    }
  }
}

