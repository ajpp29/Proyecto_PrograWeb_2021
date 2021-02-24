import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';
import { LoginService } from '../Services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginservices: LoginService) { }

  onSubmit() {
    /**
     * ENVIO DE INFORMACION HACIA API
     */
    const email = this.login_form.value.email;
    const password = this.login_form.value.password;

    let json = JSON.stringify({ email: email, password: password })

    /**
     * RESPUESTA POR PARTE DE API
     */
    var result: any

    result = this.loginservices.signIn(json);
    var code = JSON.parse(result).code;

    if (code == 200) {
      //Redireccionamiento
      this.router.navigate(['home'])
      console.log(code);
    }
    else {
      alert('Correo o Password incorrectos. Intente nuevamente')
    }

  }

  ngOnInit(): void {
    this.login_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

}
