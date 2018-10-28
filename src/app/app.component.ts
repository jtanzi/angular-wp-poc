import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Setup Site', icon: 'fas fa-cog', routerLink: ['/site-setup'] },
      { label: 'Edit Site', icon: 'fas fa-pencil', routerLink: ['/site-edit'] }
    ];
  }
}
