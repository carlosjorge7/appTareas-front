import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent },
  {path: 'user-form', component: UserFormComponent},
  {path: 'user/:id', component: UserFormComponent},
  {path: 'upload', component: UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
