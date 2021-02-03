import { Component, OnInit ,AfterViewInit} from '@angular/core';
import {socket_subject} from "../services"

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
 card:any;
 measure = "00.00";
 weight1 = "45.00";
 weight2 = "25.00";
 lost:any;
 subject = socket_subject;
  constructor(

  ) { 

    this.websock_rcv();
  }

  websock_send(str:any){
    this.subject.next([{msg:str}]);
  }
  ngOnInit(): void {
  }

  websock_rcv(){
    try {
      this.subject.subscribe(msg => {
      var jsonobj = JSON.stringify(msg);
      var json_par = JSON.parse(jsonobj);
      console.log("data recieive :",json_par.measure);
      this.measure = json_par.measure;
      this.weight2 = json_par.measure;
      this.calculate();
      });
    } catch (error) {
      console.log("Error")
    }
  }

  calculate(){
   let w1 = parseFloat(this.weight1);
   let w2 = parseFloat(this.weight2);
   this.lost = (w2/w1)*100;
  }

  ngAfterViewInit(): void {
    this.card = document.getElementById("card");
    this.card.style.height = String(screen.height - 265) + "px";
    console.log("screen height",screen.height);
    setTimeout(() => {
  this.websock_send("test");
    },2000)
  }


}
