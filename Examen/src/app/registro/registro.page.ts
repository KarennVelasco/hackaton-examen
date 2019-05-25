import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import {FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup
  constructor(public api: RestApiService,
    public loadingController: LoadingController,private route: ActivatedRoute,
    public router: Router, private formBuilder: FormBuilder) {
      this.registroForm = new FormGroup({
        name: new FormControl(), last_name: new FormControl(), mothers_last_name: new FormControl(), email: new FormControl(),
        matricula: new FormControl(), tipo: new FormControl(), password: new FormControl()
      });

    }
  ngOnInit() {
  }

  async registrar(){
    await this.api.registrar(this.registroForm.value)
    .subscribe(res => {
      console.log("Entro");
        let id = res['id'];
        this.router.navigate(['login']);
      }, (err) => {
        console.log(err);
      });
  }

}
