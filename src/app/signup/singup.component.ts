import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

declare var dataLayer: any[];
declare var gtag: any;

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  
  isSignedIn = false;
  form: FormGroup;

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.form = new FormGroup ({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    })

  }

  async onSignup(email: string,password:string){
    await this.firebaseService.signup(email, password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true;
    dataLayer.push({
      event: "CE registration",
      event_properties: {},
      user_properties: {
        id: "USER1234"
      }
    });
    gtag('set', 'Registration')
    gtag('send', 'registr')
  }

  submit() {
    if (this.form.invalid) {
      return
    }
  }

  userLogout(){
    this.isSignedIn = false;
  }

}
