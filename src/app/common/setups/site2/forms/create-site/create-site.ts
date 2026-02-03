import { Component} from '@angular/core';
import { Site } from '../../../../../shared/models/sitesetup';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';





@Component({
  selector: 'bootstrap-create-site',
  imports: [CommonModule, FormsModule, NgSelectModule, FontAwesomeModule],
  templateUrl: './create-site.html',
  styleUrl: './create-site.scss',
})
export class BootstrapCreateSiteComponent {
  faListAlt = faListAlt;

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

 
  openCityDialog(code: string | undefined) {}

  onCitySelect() {}

  onConfirmClick(){}

  onDeleteClick(){}

  onCancelClick(){}
}
  
// // ****************************End*******************************