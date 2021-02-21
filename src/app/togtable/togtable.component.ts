import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-togtable',
  templateUrl: './togtable.component.html',
  styleUrls: ['./togtable.component.css']
})
export class TogtableComponent implements OnInit {
 table = [
   {actual:"7.0",percent:"6.9"},{actual:"7.1",percent:"7.0"},{actual:"7.2",percent:"7.1"},
   {actual:"7.3",percent:"7.3"},{actual:"7.4",percent:"7.4"},{actual:"7.5",percent:"7.5"},
   {actual:"7.6",percent:"7.6"},{actual:"7.7",percent:"7.7"},{actual:"7.8",percent:"7.8"},
   {actual:"7.9",percent:"7.9"},{actual:"8.0",percent:"8.0"},{actual:"8.1",percent:"8.1"},
   {actual:"8.2",percent:"8.2"},{actual:"8.3",percent:"8.3"},{actual:"8.4",percent:"8.4"},
   {actual:"8.5",percent:"8.5"},{actual:"8.6",percent:"8.6"},{actual:"8.7",percent:"8.7"},
   {actual:"8.8",percent:"8.8"},{actual:"8.9",percent:"8.9"},{actual:"9.0",percent:"9.0"},
   {actual:"9.1",percent:"9.1"},{actual:"9.2",percent:"9.2"},{actual:"9.3",percent:"9.3"},
   {actual:"9.4",percent:"9.4"},{actual:"9.5",percent:"9.5"},{actual:"9.6",percent:"9.6"},
   {actual:"9.7",percent:"9.6"},{actual:"9.8",percent:"9.7"},{actual:"9.9",percent:"9.8"},
   {actual:"10.0",percent:"9.9"},{actual:"10.1",percent:"10.0"},{actual:"10.2",percent:"10.1"},
   {actual:"10.3",percent:"10.1"},{actual:"10.4",percent:"10.2"},{actual:"10.5",percent:"10.3"},
   {actual:"10.6",percent:"10.4"},{actual:"10.7",percent:"10.5"},{actual:"10.8",percent:"10.5"},
   {actual:"10.9",percent:"10.6"},{actual:"11.0",percent:"10.7"},{actual:"11.1",percent:"10.8"},
   {actual:"11.2",percent:"10.9"},{actual:"11.3",percent:"10.9"},{actual:"11.4",percent:"11.0"},
   {actual:"11.5",percent:"11.1"},{actual:"11.6",percent:"11.1"},{actual:"11.7",percent:"11.2"},
   {actual:"11.8",percent:"11.3"},{actual:"11.9",percent:"11.4"},{actual:"12.0",percent:"11.4"},
   {actual:"12.1",percent:"11.5"},{actual:"12.2",percent:"11.6"},{actual:"12.3",percent:"11.7"},
   {actual:"12.4",percent:"11.7"},{actual:"12.5",percent:"11.8"},{actual:"12.6",percent:"11.8"},
   {actual:"12.7",percent:"11.9"},{actual:"12.8",percent:"12.0"},{actual:"12.9",percent:"12.0"},
   {actual:"13.0",percent:"12.1"},{actual:"13.1",percent:""},{actual:"13.2",percent:""},
   {actual:"13.3",percent:""},{actual:"13.4",percent:""},{actual:"13.5",percent:""},
   {actual:"13.6",percent:""},{actual:"13.7",percent:""},{actual:"13.8",percent:""},
   {actual:"13.9",percent:""},{actual:"14.0",percent:""},{actual:"14.1",percent:""},
   {actual:"14.2",percent:""},{actual:"14.3",percent:""},{actual:"14.4",percent:""},
   {actual:"14.5",percent:""},{actual:"14.6",percent:""},{actual:"14.7",percent:""},
   {actual:"14.8",percent:""},{actual:"14.9",percent:""},{actual:"15.0",percent:""},
   {actual:"15.1",percent:""},{actual:"15.2",percent:""},{actual:"15.3",percent:""},
   {actual:"15.4",percent:""},{actual:"15.5",percent:""},{actual:"15.6",percent:""},
   {actual:"15.7",percent:""},{actual:"15.8",percent:""},{actual:"15.9",percent:""},
   {actual:"16.0",percent:""},{actual:"16.1",percent:""},{actual:"16.2",percent:""},
   {actual:"16.3",percent:""},{actual:"16.7",percent:""},{actual:"16.5",percent:""},
   ]
   
  constructor() { }

  ngOnInit(): void {
  }
  addNew(event:any){
    this.table.push({actual:"",percent:""});
  }

  remove(i:any){
  if(i != 0){
  this.table.splice(i,1);
  }
  }

}
