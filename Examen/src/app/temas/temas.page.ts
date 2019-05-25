import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
})
export class TemasPage implements OnInit {

  constructor() { }

  temas = []

  ngOnInit() {
    this.temas.push({"id": 1, "name":"Sumas","subject":{"id":1,"name":"Matematicas"}});
  }

}
