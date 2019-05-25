import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen-alumnos',
  templateUrl: './examen-alumnos.page.html',
  styleUrls: ['./examen-alumnos.page.scss'],
})
export class ExamenAlumnosPage implements OnInit {

  constructor() { }

  preguntas = [];

  ngOnInit() {
    
    //Obtener preguntas
    this.preguntas.push({"pregunta":"Cuantos años tiene alvaro?","respuestas":["23","24","47"],"tipo":"incisos","correcta":"3"});
    this.preguntas.push({"pregunta":"nombre del equipo","respuestas":["los nasty boys","Null pointer","patriarcado"],"tipo":"incisos","correcta":"2"});
    
  }

}
