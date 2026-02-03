import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SiteListComponent } from '../list/list';
import { CreateSiteComponent } from '../../forms/create-site/create-site';
import { Observable } from 'rxjs';
import { Site } from '../../../../../shared/models/sitesetup';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'site-template',
  imports: [FontAwesomeModule, SiteListComponent, CreateSiteComponent],
  templateUrl: './template.html',
  styleUrl: './template.scss',
})
export class SiteTemplateComponent {

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
