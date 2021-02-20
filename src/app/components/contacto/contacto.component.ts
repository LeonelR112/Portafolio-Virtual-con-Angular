import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,state } from "@angular/animations";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  animations: [
    trigger('fadeIn', [ //nombre de la animacion
      state('void', style({ 
        transform: 'rotateY(100deg)',
        opacity:0
      })),

      transition(':enter', [
        animate(500,style({
          transform: 'rotateY(0)',
          opacity:1
        }))
      ]),
    ])
  ]
})
export class ContactoComponent implements OnInit {

  email:string = "Leonel.Ruiz112@gmail.com";
  links = [
    {link: "#" , icon: "./../../../assets/iconos/fb-icon.png" , name: "Facebook" },
    {link: "https://www.linkedin.com/in/leonel-ruiz-904b32195" , icon: "./../../../assets/iconos/in-icon.png", name: "Linkedin" },
    {link: "https://github.com/LeonelR112" , icon: "./../../../assets/iconos/gh-icon.png" , name: "Github"}
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
