import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_form!: FormGroup;
  submitted = false;
  titulo = 'Crear un Formulario con Angular 7 y Bootstrap 4 + Validación';

  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.login_form.controls; }

  onSubmit() {
    
    console.log("Hola")
  }

  ngOnInit(): void {
    this.login_form = this.formBuilder.group({
      nya: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      postre: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}
