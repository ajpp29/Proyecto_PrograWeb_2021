import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component'
import { LayoutComponent } from './Components/layout/layout.component';
import { LayoutInicioComponent } from './Components/layout-inicio/layout-inicio.component';

const routes: Routes = [


  {
    path: '', component: LayoutInicioComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent }
    ]

  },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
