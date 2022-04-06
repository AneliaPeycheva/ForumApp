import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';
import { ProfileComponent } from '../auth/profile/profile.component';
import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profile',
    canActivate:[AuthGuard],
    component:ProfileComponent
  }
];

export const AuthRoutingModule = RouterModule.forChild(routes);



