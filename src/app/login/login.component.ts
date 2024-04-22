import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: '<a href="https://example.com" target="_blank"> Go To Example</a>',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name : string = '';
  gender : string = 'Male' || 'Female';
  email : string  = '';
  password : string = '';
  form!: FormGroup;

  genders: string[] = ['Male','Female'];

  constructor(private fb: FormBuilder)
  {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      gender:['',[Validators.required]],
      password:['', Validators.pattern("^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d).{8,}$")],
      email :['',[Validators.required, Validators.email]],
    });
  }

  get fullName() {return this.form.get('fullName'); }
  get Password() {return this.form.get('password');}
  get Gender() {return this.form.get('gender');}
  get Email() {return this.form.get('email');}
  
  onSubmit(){
      console.log("Nama" + this.fullName?.value);
      console.log("Email" + this.Email?.value);   
      console.log("Pass" + this.Password?.value); 
      console.log("Gender" + this.Gender?.value);  

  }
}
