import { Component } from '@angular/core';
import { CONSTANTS } from '../../../app.constants';

@Component({
  selector: 'app-search-item',
  imports: [],
  templateUrl: './search-item.html',
  styleUrl: './search-item.scss',
})
export class SearchItem {
  CONSTANTS = CONSTANTS;

  dialogName: string = '';

  search: any = '';

  
}
