import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Site } from '../models/sitesetup';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  private readonly _selectedSite = new BehaviorSubject<Site | null>(null);
  readonly selectedSite$ = this._selectedSite.asObservable();

  setSelectedSite(_site: Site) {
    this._selectedSite.next(_site);
  }

  getSelectedSite() {
    return this._selectedSite.getValue();
  }
  
}
