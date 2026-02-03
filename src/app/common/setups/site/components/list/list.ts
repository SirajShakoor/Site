import { Component, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Site } from '../../../../../shared/models/sitesetup'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { faTimes, faPrint, faSyncAlt, faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { SiteService } from '../../services/site';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: 'site-list',
  imports: [FontAwesomeModule, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatTableModule, MatSortHeader, MatSort, MatTooltip],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class SiteListComponent {

    search: any = '';

    selectedRow: Site | null = null;
    constructor(private siteService: SiteService){}

    // subscription!: Subscription;
    displayedColumns: string[] = ['code', 'name', 'shortName'];

    dataSource = new MatTableDataSource<Site>([
    
    { code: 'S001', name: 'Site One', shortName: 'One' },
    { code: 'S002', name: 'Site Two', shortName: 'Two' },
    { code: 'S003', name: 'Site Three', shortName: 'Three' },
    { code: 'S004', name: 'Site Four', shortName: 'Four' },
    { code: 'S005', name: 'Site Five', shortName: 'Five' },
    // { code: 'S006', name: 'Site Six', shortName: 'Six' },
    // { code: 'S007', name: 'Site Seven', shortName: 'Seven' },
    // { code: 'S008', name: 'Site Eight', shortName: 'Eight' },
    // { code: 'S009', name: 'Site Nine', shortName: 'Nine' },
    // { code: 'S010', name: 'Site Ten', shortName: 'Ten' },
    // { code: 'S011', name: 'Site Eleven', shortName: 'Eleven' },
  ]);

  @ViewChild(MatSort) sort!: MatSort;

  onRowClick(site: Site) {
    this.selectedRow = site;
    console.log('The row data', site)
  }


  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  refreshComponent() {
        window.location.reload();
   }

   openReportComponent() {}

  clearSearch() {
        this.search = "";
        this.dataSource.filter = ""; // Clear the filter to show all data
    }

}

