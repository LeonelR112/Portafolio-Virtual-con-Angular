import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,state } from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [ //nombre de la animacion
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate(800,style({
          opacity:1
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
