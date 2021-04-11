import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthorComponent } from './author/author.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { EditorComponent } from './editor/editor.component';
import { PublisherComponent } from './publisher/publisher.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReadComponent } from './read/read.component';
import { ReadUserComponent } from './read-user/read-user.component';

import { AuthService } from './auth.service';
import { ItemService } from './item.service';
import { UserService } from './user.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AuthorComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    AdminComponent,
    ReviewerComponent,
    EditorComponent,
    PublisherComponent,
    AddComponent,
    EditComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    ReadComponent,
    ReadUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AuthService, ItemService, UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
