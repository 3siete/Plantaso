import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder){}
  loginForm!:FormGroup;

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    })
  }
  onSubmit(){
    
    const value = this.loginForm.value;
    
    console.log(this.loginForm.value)
  } 

}
