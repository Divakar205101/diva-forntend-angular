import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleCreationComponent } from './module-creation/module-creation.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModuleSearchComponent } from './module-search/module-search.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { AuthGuard } from 'src/app/auth/guard/auth.guard';

const routes : Routes =[
  { path: 'user', component: UsersComponent ,canActivate: [AuthGuard],}, 
]

@NgModule({
  declarations: [
    ModuleCreationComponent,
    UsersComponent,
    ModuleSearchComponent,
    UserSearchComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SecurityModule { }
