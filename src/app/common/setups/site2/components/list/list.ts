import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { Site } from '../../../../../shared/models/sitesetup';




@Component({
  selector: 'bootstrap-site-list',
  imports: [FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class BootstrapSiteListComponent {
  faTimes = faTimes;
  faPrint = faPrint;
  faSyncAlt = faSyncAlt;
  faLongArrowAltUp = faLongArrowAltUp;
  faLongArrowAltDown = faLongArrowAltDown;




  search: any = '';
  sortedBy: any;
  order: any;
  selectedSiteId = null;

  sites: Site[] = [];

  @Input() hideSelection = false;

  openReportComponent(){}

  onRowClick(site: Site){

  }

  refreshComponent(){}

  applyFilter(value: any) {}

  sortBy(column: any){}

  clear() {}
}

