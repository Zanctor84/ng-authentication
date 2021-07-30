import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { SingupComponent } from './signup/singup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path: '', component: SigninComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'home', component: SingupComponent }
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingupComponent,
    SigninComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCzBWaIFlZFRNkaq982oPDc6-vxX6hd838",
      authDomain: "authentication-user-571f9.firebaseapp.com",
      projectId: "authentication-user-571f9",
      storageBucket: "authentication-user-571f9.appspot.com",
      messagingSenderId: "469911548364",
      appId: "1:469911548364:web:19453f52edf9f1b187ad69",
      measurementId: "G-KJG67QSGLP"
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
  exports: [
    HomeComponent
  ]
})
export class AppModule { }
