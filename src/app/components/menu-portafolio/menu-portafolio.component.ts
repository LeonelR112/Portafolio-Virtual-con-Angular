import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,state } from "@angular/animations";

@Component({
  selector: 'app-menu-portafolio',
  templateUrl: './menu-portafolio.component.html',
  styleUrls: ['./menu-portafolio.component.css'],
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
      ])])
  ]

})


export class MenuPortafolioComponent implements OnInit {

  teamWork:boolean;

  proyectos = [
    {categoryClass: "bg-design", titleType: "Template", img : "./../../../assets/proyectos/t-shirt-shop-img.jpg", videoDemo: "./../../../assets/videos/demo-tshitShop.MP4" , title: "T-Shirt Shop", text: "Plantilla prototipo,inspirada en una vista en internet. Se trata de una tienda online para ventas de remeras. Contiene una sección para listar todos los productos, sección de preguntas (FAQ) y contacto,", url : "https://leonelr112.github.io/t-shirt-shop-template/" , urlRepo: "", teamPartner: ""},
    {categoryClass: "bg-appWeb", titleType: "App Web", img : "./../../../assets/proyectos/ClimaApp.jpg", videoDemo :"" ,title: "Resumen del Clima", text: "Una app web que muestra un resumen actual del clima de la ciudad seleccionada. Realiza peticiones a una APIRest de la web 'openweathermap.org' que devuelve un JSON. Desde PHP utiliza curl para las peticiones", url : "https://lrpvapps.000webhostapp.com/myapps/home" , urlRepo: "", teamPartner: ""},
    {categoryClass: "bg-design", titleType: "Template", img : "./../../../assets/proyectos/portafolio-v1.jpg", videoDemo :"" , title: "Portafolio virtual de una página", text: "Esta era la primera versión de mi portafolio virtual, el diseño está hecho con HTML, CSS, JS, Bootstrap y Jquery. Contiene fondos animados, cajas desplegables para mostrar resumen general del usuario y un formulario de contacto.", url : "https://leonelr112.github.io/Portafolio-one-page/" , urlRepo: "", teamPartner: ""},
    {categoryClass: "bg-design", titleType: "Template", img : "./../../../assets/proyectos/contador.jpg", videoDemo :"" ,title: "Contabilidad S.A", text: "Plantilla de una web para una empresa o equipo de contabilidad. Contiene secciones de 'servicios', 'quienes somos', 'áreas de competencia', 'noticias' y 'contacto'. Tiene animaciones de fondo y objetos.", url : "https://leonelr112.github.io/ContabilidadSA-template/" , urlRepo: "", teamWork: false, nameTeam: "", teamPartner: ""},
    {categoryClass: "bg-appWeb", titleType: "App Web", img : "./../../../assets/proyectos/myProNotes-app.jpg", videoDemo :"" ,title: "My ProNotes", text: "Aplicación web de Notas, el cual cada usuario registrado, podrá crearse notas propias y guardarlas. El proyecto se realizó en conjunto con Lucas Rodriguez el cual es el encargado del front-end con vue.js y nuxt.js En mi caso fue crear las API-REST con PHP para realizar la vista, creación, modificación y borrado de las notas en el back-end.", url : "https://affectionate-lovelace-c030fc.netlify.app/" , urlRepo: "https://github.com/lucasrdz994", teamPartner: "Ver repo de Lucas Rodriguez"},
    {categoryClass: "bg-appWeb", titleType: "App Web", img : "./../../../assets/proyectos/portafolio-v2.jpg", videoDemo :"" ,title: "Mi portafolio Virtual", text: "Mi actual portafolio hecho con Angular 8 con diseño css bootstrap y animaciones al cambiar de secciones.", url : "#" , urlRepo: ""}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
