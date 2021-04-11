import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';
import { AuthorComponent } from './author/author.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditComponent } from './edit/edit.component';
import { EditorComponent } from './editor/editor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublisherComponent } from './publisher/publisher.component';
import { ReadUserComponent } from './read-user/read-user.component';
import { ReadComponent } from './read/read.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'contactus', component: ContactUsComponent},
  
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  
  {path: 'author', component: AuthorComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path:'reviewer', component: ReviewerComponent, canActivate: [AuthGuard]},
  {path: 'editor', component: EditorComponent, canActivate: [AuthGuard]},
  {path:'publisher', component: PublisherComponent, canActivate: [AuthGuard]},

  {path: 'add', component: AddComponent, canActivate: [AuthGuard]},
  {path:'edit', component: EditComponent, canActivate: [AuthGuard]},
  {path:'edituser', component: EditUserComponent, canActivate: [AuthGuard]},
  {path:'read/:id', component: ReadComponent, canActivate: [AuthGuard]},
  {path:'readuser/:id', component: ReadUserComponent, canActivate: [AuthGuard]},
  
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
