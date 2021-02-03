import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'; // CLI imports router
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = "username";
password = "password";
  constructor(
    private router:Router
  ) { }

  authenticate(){
 if(this.username == "admin" && this.password == "admin2020"){
  localStorage.setItem("login_status","OK");
  alert("Welcome :  " + this.username )
 this.router.navigateByUrl('process');
  return;
  }else{
  localStorage.setItem("login_status","false");
  }
  }
  ngOnInit(): void {
  }

}
