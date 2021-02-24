import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login/login.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public _login: LoginService) {
  }

  ngOnInit(): void {
  }

}
