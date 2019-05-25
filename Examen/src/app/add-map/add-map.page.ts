import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-add-map',
  templateUrl: './add-map.page.html',
  styleUrls: ['./add-map.page.scss'],
})
export class AddMapPage implements OnInit {

  locationForm: FormGroup
  constructor(public api: RestApiService,
    public loadingController: LoadingController,private route: ActivatedRoute,
    public router: Router, private formBuilder: FormBuilder) {
      this.locationForm = new FormGroup( {
        name: new FormControl(),
        description: new FormControl(),
        lat: new FormControl(),
        lng: new FormControl()
      });
    }

  ngOnInit() {
  }

  async saveLocation(){
    await this.api.createLocation(this.locationForm.value)
    .subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/show-map/'+id]);
      }, (err) => {
        console.log(err);
      });
  }
}
