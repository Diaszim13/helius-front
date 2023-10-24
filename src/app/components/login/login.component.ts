import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: any;
  constructor(private formBuilder: FormBuilder, private Service: UserService) {}

  ngOnInit() {
    this.form =  new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    const data = this.form.value;

    const users = this.Service.getUsers(); 
    console.table(users);
    if(data.username == 'admin' && data.password == 'admin') {
      console.log('logado');
    }
    
  }
}
