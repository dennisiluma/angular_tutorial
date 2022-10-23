import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  loginEmail:string = ""
  defaultLoginEmail:string = "dennis@gmail.com"

  confirmLoginAndRedirect(){
    if(this.loginEmail == this.defaultLoginEmail){
      this.router.navigate(['/post'])
    }else{
      alert("Wrong Login Credentials 🥰")
    }
  }
}
