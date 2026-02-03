import { Component} from '@angular/core';
import { Site } from '../../../../../shared/models/sitesetup';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@Component({
  selector: 'create-site',
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatButtonModule, MatIconModule],
  templateUrl: './create-site.html',
  styleUrl: './create-site.scss',
})
export class CreateSiteComponent {

  _site: Site = {};

  edit: boolean = false;

  cities: any;

  region: any;
  country: any;

  ngOnInit(){
    this._site = {};
    // this._site.companyCode = this.loginUser.company;
    this._site.code = 'S001'
    this._site.activeStatus = "Y";
    this._site.contactSalutation = "M";
  }

  onCitySelect() {}

  onConfirmClick(){}

  onDeleteClick(){}

  onCancelClick(){}
}
  
// // ****************************End*******************************