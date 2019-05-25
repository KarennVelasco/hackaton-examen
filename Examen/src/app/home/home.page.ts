import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl:NavController) {}

  temas(){
    this.navCtrl.navigateForward('temas');
  }

  materias(){
    this.navCtrl.navigateForward('materias');
  }

  grupos(){
    this.navCtrl.navigateForward('grupos');
  }

  escuelas(){
    this.navCtrl.navigateForward('escuelas');
  }
}

