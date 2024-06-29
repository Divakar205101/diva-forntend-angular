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


const routes: Routes = [ 
    { path: 'login', component: LoginComponent},
    { path: 'divatech', component: AdminComponent},
    { path: 'usersSearch', component: UserSearchComponent},
    { path: 'createUser', component: UsersComponent},
    { path: 'edit/:memberId', component: UsersComponent},
    { path: 'create-module', component: ModuleCreationComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'dash-borad', component: DashBoardComponent},
    { path: 'moduleSearch', component: ModuleSearchComponent},
    { path: 'user', component: UsersComponent }, 
    { path: '', redirectTo: '/login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
