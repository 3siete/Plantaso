import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder)

}
