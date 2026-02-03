import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { BootstrapSiteListComponent } from '../list/list';
import { BootstrapCreateSiteComponent } from '../../forms/create-site/create-site';
import { Observable } from 'rxjs';
import { Site } from '../../../../../shared/models/sitesetup';


@Component({
  selector: 'site-template',
  imports: [FontAwesomeModule, BootstrapSiteListComponent, BootstrapCreateSiteComponent],
  templateUrl: './template.html',
  styleUrl: './template.scss',
})
export class BootstrapSiteTemplateComponent {

  refreshList: boolean = true;
  hideAddButton: boolean = false;
  collapsed: boolean = false;
  selectedSite$ = new Observable<Site>();

  faBars = faBars;

  showHide(){
    if(this.collapsed){
      this.collapsed = false;
    } else{
      this.collapsed = true;
    }
  }

  onAddSiteSetupClicked(){}

}
