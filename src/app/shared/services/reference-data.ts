import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const CITY = "CityPicklist";

@Injectable({
  providedIn: 'root',
})
export class ReferenceDataService {

  constructor(private httpClient: HttpClient) {}
  getCitiesRegion(city: string) {
    const params: any = {
      userId: 'SUPERADMIN',
      cityCode: city,
      companyCode: '0001'
    };
    return this.httpClient.get(CITY, { params: params }).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
