import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router'; // CLI imports router
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weight-cal';
 constructor(
   private router:Router
  ){

 }
  ngOnInit() {
  if(localStorage.getItem("login_status") == "false"){
  this.router.navigateByUrl("login");
  }else{
  this.router.navigateByUrl("process")}
  }
}

