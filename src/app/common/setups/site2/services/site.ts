import { HttpClient, HttpBackend } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONSTANTS } from "../../../../app.constants";
import { map } from "rxjs/operators";
import { Site } from "../../../../shared/models/sitesetup";


const API_BASE_URL = "http://115.186.155.229:8090/RaadAPITest/";

const SITE = "SiteSetup/"

@Injectable({
    providedIn: "root"
})
export class SiteService {

    userID: string = 'SUPERADMIN';

    private httpClient1: HttpClient;
    constructor(private httpClient: HttpClient, handler: HttpBackend) {
        this.httpClient1 = new HttpClient(handler);
    }

    private siteSetup: Site | null = null;

    getSiteSetup() {
        return this.siteSetup;
    }

    setSiteSetup(_siteSetup: Site) {
        this.siteSetup = _siteSetup;
    }

    removeSiteSetup() {
        this.siteSetup = null;
    }

    getSiteSetupList(companyCode: string) {
        const params: any = {
            userId: this.userID,
            companyCode: companyCode
        };
        return this.httpClient.get(SITE + CONSTANTS.API_URL.GET_ALL_SITE, { params: params }).pipe(
            map((response: any) => {
                return response;
            })
        );
    }

    saveSiteSetup(body: any) {
        const params: any = {
            userId: this.userID,
        };
        return this.httpClient.post(API_BASE_URL + SITE + CONSTANTS.API_URL.SAVE_SITE, body, { params: params }).pipe(map((response: any) => response));
    }

    updateSiteSetup(body: any) {
        const params: any = {
            userId: this.userID,
            code: body.code,
            companyCode: body.companyCode
        };
        return this.httpClient.post(SITE + CONSTANTS.API_URL.UPDATE_SITE, body, { params: params }).pipe(map((response: any) => response));
    }

    deleteSiteSetup(code: string, companyCode: string) {
        const params: any = {
            userId: this.userID,
            code: code,
            companyCode: companyCode
        };
        return this.httpClient.delete(SITE + CONSTANTS.API_URL.DELETE_SITE, { params: params }).pipe(map((response: any) => response));
    }

    getSiteSetupByCode(code: String, companyCode: String) {
        const params: any = {
            userId: this.userID,
            code: code,
            companyCode: companyCode
        };
        return this.httpClient.get(SITE + CONSTANTS.API_URL.GET_SITE_BY_CODE, { params: params }).pipe(
            map((response: any) => {
                return response;
            })
        );
    }
    getReport(
        reportFormat: string
    ) {
        const params: any = {
            userId: this.userID,
            reportFormat: reportFormat
        };
        return this.httpClient.get(SITE + CONSTANTS.API_URL.GET_SITE_REPORT, {
            params: params,
            responseType: "blob"
        });
    }

}
