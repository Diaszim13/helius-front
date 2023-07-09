import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form =  new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    console.log(this.form);
    
  }
}
