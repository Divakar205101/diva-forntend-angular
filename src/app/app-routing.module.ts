import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleCreationComponent } from './security/security/module-creation/module-creation.component';
import { UsersComponent } from './security/security/users/users.component';
import { ModuleSearchComponent } from './security/security/module-search/module-search.component';
import { LoginComponent } from './auth/auth/login/login.component';
import { RegisterComponent } from './auth/auth/register/register.component';
import { UserSearchComponent } from './security/security/user-search/user-search.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/guard/auth.guard';



const routes: Routes = [ 
    { path: 'login', component: LoginComponent},
    { path: 'usersSearch', component: UserSearchComponent,canActivate: [AuthGuard],},
    { path: 'createUser', component: UsersComponent,canActivate: [AuthGuard],},
    { path: 'editmember', component: UsersComponent,canActivate: [AuthGuard],},
    { path: 'create-module', component: ModuleCreationComponent,canActivate: [AuthGuard],},
    { path: 'register', component: RegisterComponent},
    {
      path: 'admin',  // Admin route
      component: AdminComponent,
      canActivate: [AuthGuard],  // Protect this route
      children: [
        {
          path: '',  // Default child route for admin, loads the dashboard
          component: DashBoardComponent
        },
        {
          path: 'userscreate',  // Child route for creating users
          component: UsersComponent,canActivate: [AuthGuard],
        },
        { path: 'usersSearch', 
          component: UserSearchComponent,canActivate: [AuthGuard],
        },
        { path: 'moduleSearch', component: ModuleSearchComponent,canActivate: [AuthGuard],},
        { path: 'editmember', component: UsersComponent,canActivate: [AuthGuard],},
      ]
    

      
    },
    { path: 'moduleSearch', component: ModuleSearchComponent,canActivate: [AuthGuard],},
    {path:'page-not-found',component:PageNotFoundComponent,canActivate: [AuthGuard],},
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    // {path:'**',redirectTo:'page-not-found',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
