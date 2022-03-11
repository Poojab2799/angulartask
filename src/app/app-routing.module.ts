import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CareerComponent } from './career/career.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
{
  path:'login',
  component:LoginComponent
},
{
  path:'signup',
  component:SignupComponent
},
{
  path:'',
  redirectTo:'login',
  pathMatch:"full"
},
{
  path:'home',
  component:HomeComponent,
  canActivate:[AuthGuard]
},
{
  path:'about',
  component:AboutComponent,
  canActivate:[AuthGuard]
},
{
  path:'services',
  component:ServicesComponent,
  canActivate:[AuthGuard]
},
{
  path:'careers',
  component:CareerComponent,
  canActivate:[AuthGuard]
},
{
  path:'registration',
  component:RegisterComponent,
  canActivate:[AuthGuard]
},
{
  path:'careers/registration',
  component:RegisterComponent,
  canActivate:[AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
