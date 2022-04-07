import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  linksMenu: Array<any> =[
    {
      name:'home',
      icon : 'uil-airplay'
    },
    {
      name:'Buscar',
      icon : 'uil-search' 
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
