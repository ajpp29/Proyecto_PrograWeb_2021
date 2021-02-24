import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {LoginService} from '../Services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {

    const email = this.login_form.value.email;
    const password = this.login_form.value.password;

    let json = JSON.stringify({ email: email, password: password })

    //localStorage.setItem('user', json)

    var data: any
    data = localStorage.getItem('user')


    console.log()
  }

  ngOnInit(): void {
    this.login_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

}
