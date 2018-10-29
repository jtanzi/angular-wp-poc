import { Component, OnInit } from '@angular/core';
import { SiteService } from '../@services/site.service';

@Component({
  selector: 'app-site-edit',
  templateUrl: './site-edit.component.html',
  styleUrls: ['./site-edit.component.css']
})
export class SiteEditComponent implements OnInit {

  pages: any[];

  constructor(
    private siteService: SiteService
  ) { }

  ngOnInit() {

    this.siteService.getPages();
  }

}
