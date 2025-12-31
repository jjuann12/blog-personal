import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { RouterLink, RouterModule, Router } from "@angular/router";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  registerForm: FormGroup

  constructor (private fb: FormBuilder, private router: Router){

    this.registerForm = this.fb.group({
        name: ['name', Validators.required],
        email: ['email', Validators.required],
        user: ['usuario', Validators.required],
        
        password: ['contrasaeña', Validators.required],

    });

  }

  get Password(){
    return this.registerForm.get('password');
  }

  get User(){
    return this.registerForm.get('user')
  }
  get Email(){
    return this.registerForm.get('email')
  }
  get Name(){
    return this.registerForm.get('name')
  }



  onRegister(event: Event) {
    event.preventDefault();

    const name = this.registerForm.get('name')?.value;
    const email = this.registerForm.get('email')?.value;
    const username = this.registerForm.get('user')?.value;
    
    const password = this.registerForm.get('password')?.value;

    if (this.registerForm.valid && username === name) {
      this.router.navigate(['/login'])
      console.log(name, username)
    }
    else {
      console.log('no se por que no anda ')
    }
    
  
  }

}
