import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,state } from "@angular/animations";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
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

export class InfoComponent implements OnInit {

  modal: NgbModalRef;
  certificado:any;

  infoPersonal = {
    sobreMi: "Hace un año me inicié en el mundo de la programación por curiosidad, al ver mi buena capacidad de comprensión en el tema, empecé a tomar cada vez mas aprecio a la programación. Finalmente, al investigar más sobre este maravilloso mundo, me decidí a especializarme como programador web en una carrera como Programador Full-stack PHP en un instituto. Actualmente me estoy iniciando como desarrollador web y quiero poder adquirir más experiencia en el tema. Me gusta la idea de poder ayudar a personas, empresas o emprendedores a expandirse al mundo digital. Me considero muy autodidacta, cada vez que tenga un tiempo libre, me dedico a investigar, aprender y mejorar mis habilidades de programación web y así obtener más valor y experiencia.",
    educacion: {
      resumen: "La informática y la tecnología es algo que me fascina, por la forma que facilita el trabajo a las personas, sus sistemas complejos de su creación y su innovación fue lo que más me atrajo.",
    },
    cursos: [
      {
      forma:"Formación como Full-Stack PHP Web Developer",
      inst:"Educación IT (2020)",
      infoInst: "Realicé el paquete completo de la carrera de programación web PHP full Stack para implementar todos los conocimientos básicos-intermedios y desarrollar páginas web de forma profesional tanto desde el Front-End (HTML,CSS, JS, Angular, ReactJs) como en el Back-End(PHP y MySQL). A partir de acá, mi meta es especializarme en el back-end con PHP.",
      urlInst: "https://www.educacionit.com/institucional"
      }
    ],
    conocimientos: ""
  }

  lenguajes = [
    {nombre: "HTML5", imgUrl: "./../../../assets/html.png", certificated: true ,imgCert: "./../../../assets/certificados/c-html.png", desc : "Metadatos, navegadores, encabezados y listas, CSS, tipografías, Vínculos, formularios, Javascript básico, canvas."},
    {nombre: "CSS3", imgUrl: "./../../../assets/css.png", certificated: false , imgCert: "", titleDesc: "", desc : ""},
    {nombre: "JAVASCRIPT", imgUrl: "./../../../assets/js.png", certificated: true, imgCert: "./../../../assets/certificados/c-javascript.png", desc : "DOM, Eventos, Formularios y validaciones, AJAX, consumo API Rest, Páginas SPA, subidas y descargas de archivos, promesas, POO, prototipos, patrones de diseños, bases de NodeJs, Jquery básico."},
    {nombre: "PHP", imgUrl: "./../../../assets/php.png", certificated: true, imgCert: "./../../../assets/certificados/c-php.png", desc : "Arrays, funciones con strings, Archivo de texto(crear, editar), PHP con MySQL, PDO, cookies, sessiones, envíos de email, configuración del servidor(apache), Paradigma orientado a objetos."},
    {nombre: "MYSQL", imgUrl: "./../../../assets/mysql.png", certificated: true, imgCert: "./../../../assets/certificados/c-mysql.png", desc : "Base de datos, motor de BDD, SQL, tipos de datos, estructura de la BDD, consultas, subconsultas, consultas relacionadas."},
    {nombre: "BOOTSTRAP", imgUrl: "./../../../assets/bootstrap.png", certificated: false, imgCert: "", desc : ""},
    {nombre: "JQUERY", imgUrl: "./../../../assets/jquery.png", certificated: false, imgCert: "", desc : ""},
    {nombre: "GIT", imgUrl: "./../../../assets/git.png", certificated: true, imgCert: "./../../../assets/certificados/c-git.png", desc : "Git bash, uso de la consola, Estructura del trabajo con git(working directory, Staging Area o Index, repositorio local y remoto), trabajo en equipo, Github."},
    {nombre: "ANGULAR", imgUrl: "./../../../assets/angular.png", certificated: true, imgCert: "./../../../assets/certificados/c-angular.png", desc : "Typescript, web SPA, Formularios y validaciones, inyección de dependencias, routing, services, consumo de API Rest"},
    {nombre: "REACT-JS", imgUrl: "./../../../assets/reactjs.png", certificated: true, imgCert: "./../../../assets/certificados/c-reactjs.png", desc : "Uso de react-app por consola, babel, props y states, react router, Redux, web components, páginas SPA"},
    {nombre: "LARAVEL", imgUrl: "./../../../assets/laravel.png", certificated: true, imgCert: "./../../../assets/certificados/c-laravel.png", desc : "Composer, Instalación de Laravel, patrón MVC, blade, PDO, raw SQL, query builder, Eloquent, peticiones y validaciones, helpers y sessiones, autenticaciones, API rest."},
    {nombre: "MAQUETADO WEB", imgUrl: "./../../../assets/webdesign.png", certificated: true, imgCert: "./../../../assets/certificados/c-maquetado.png", desc : "Elementos multimedia, videos, audios, progress, shadows, fondos y sus propiedades, tipografías especiales, transformaciones y perspectivas, transiciones, animaciones, selectores avanzados, bases de CSS LESS, flexbox, grid, diseño responsivo."},
    {nombre: "DESARROLLO SEGURO", imgUrl: "./../../../assets/desarrolloSeguro.png", certificated: true, imgCert: "./../../../assets/certificados/c-desarrolloSeguro.png", desc : "Amenazas, vulnerabilidad, riesgos, OWASP, seguridad en BDD, validar correctamente inputs, XSS, SQL injection, autenticaciones fuertes, identificaciones por diferentes métodos relacionados(tokens, tarjetas magnéticas, password, etc.), logueo de eventos (logs), criptografías."},
    {nombre: "API WEB SERVICE", imgUrl: "./../../../assets/api.png", certificated: true, imgCert: "./../../../assets/certificados/c-apiWebService.png", desc : "Funcionamiento de un XML y JSON, creación de archivos XML y JSON con PHP, API-REST y API-SOAP y WSDL (consumo y creación con PHP), PHP curl, consumo de APIS y creación en el servidor."},
    {nombre: "SCRUM - FUNDAMENTOS", imgUrl: "./../../../assets/scrum.png", certificated: true, imgCert: "./../../../assets/certificados/c-scrumFundamentos.png", desc : "Introducción a metodologías ágiles, Historia de scrum y su evolución, Roles en Scrum como el dueño del producto, Scrum Master, Product Owner y equipo de desarrollo. Conceptos mínimos de un producto viable, implementación de Scrum y su estructura de trabajo. Planificación del sprint y el trabajo en equipo."},
    {nombre: "VUE.JS", imgUrl: "./../../../assets/vue.png", certificated: true, imgCert: "./../../../assets/certificados/c-vuejs.png", desc : "Aplicaciones reactivas, manejo de componentes, manejo de Vue.js nativo y con Vue-cli, manejo de formularios como validaciones y envios de datos, Peticiones http con fetch y axios en Vue.js, implementar y usar Redux con Vuex, Routing y web SPA."}
  ];

  otrasHabilidades = [
    {nombre: "Soporte y Reparación de PC",
    img: "./../../../assets/pcR.png", 
    desc: "Conocimientos en reparación de PC en Software, Hardware, Electrónica y Redes.",
    fechaCert: "Certificado (2014) - Instituto MAS (Lomas de zamora - Bs As)",
    },
    {nombre: "Operador de PC",
    img:"./../../../assets/OPc.png", 
    desc: "Manejo del paquete de Microsoft Office(Access, Excel, Power Point y Word) en el sistema operativo Windows para realizar seguimientos y administración de datos.",
    fechaCert: "Certificado (2018) - Centro Educativo Lanús (Lanús Este - Bs As)",
    }
  ]

  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {
  }


  private verCertificado(lenguaje, modal){
    this.certificado = lenguaje;

    if(!lenguaje.certificated){
      
    }
    else{
      this.modal = this.modalService.open(modal, {size:"lg"});
      console.log(lenguaje)
    }
  }

  private cerrarModal(){
    this.modal.close();
  }

}
