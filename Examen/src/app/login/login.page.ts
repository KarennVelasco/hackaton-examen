import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import {FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup
  constructor(public api: RestApiService,
    public loadingController: LoadingController,private route: ActivatedRoute,
    public router: Router, private formBuilder: FormBuilder, private navCtrl:NavController) {
      this.loginForm = new FormGroup({
        email: new FormControl(), password: new FormControl()
      });
    }

  ngOnInit() {
  }

  correo="";
  contrasena="";
  
  crearUsuario(){
    this.navCtrl.navigateForward('registro');
  }

  async ingresar(){
    await this.api.ingresar(this.loginForm.value)
    .subscribe(res => {
      console.log("Entro");
        let id = res['id'];
        this.router.navigate(['login']);
        this.navCtrl.navigateForward('home');
      }, (err) => {
        console.log(err);
      });
  }

}
