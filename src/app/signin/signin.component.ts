import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isSignedIn = false;

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  
  if (localStorage.getItem('user') !== null)
      this.isSignedIn = true;
    else
      this.isSignedIn = false;
  }
  
  async onSignin(email: string,password:string){
    await this.firebaseService.signin(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true;
    // this.router.Navigate(['/home']);
  }

  userLogout(){
    this.isSignedIn = false;
  }


}
