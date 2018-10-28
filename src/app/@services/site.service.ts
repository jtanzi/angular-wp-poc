import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SiteService {

  constructor(
    private http: HttpClient
  ) { }

  getSite(siteId: number) {

  }

  getPage(pageId: number) {

  }

}
