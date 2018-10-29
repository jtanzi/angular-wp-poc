import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { patch } from 'webdriver-js-extender';

@Injectable()
export class SiteService {

  wpRestApiUrl = 'http://dev-angular-wp-poc.pantheonsite.io/wp-json';

  constructor(
    private http: HttpClient
  ) { }

  getSite(siteId: number) {
    this.http.get(`${this.wpRestApiUrl}/wp/v2/sites`).subscribe((site) => {
      console.dir(site);
    });
  }

  updateSite(siteId: number, patchValue: any) {
    this.http.post(`${this.wpRestApiUrl}/wp/v2/sites`, patchValue).subscribe((response) => {
      console.dir(response);
    });
  }

  getPage(pageId: number) {
    this.http.get(`${this.wpRestApiUrl}/wp/v2/pages/${pageId}`).subscribe((page) => {
      console.dir(page);
    });
  }

  updatePage(pageId: number, patchValue: any) {
    this.http.post(`${this.wpRestApiUrl}/wp/v2/pages/${pageId}`, patchValue).subscribe((response) => {
      console.dir(response);
    });
  }

  deletePage(pageId: number) {
    this.http.delete(`${this.wpRestApiUrl}/wp/v2/pages/${pageId}`).subscribe((response) => {
      console.dir(response);
    });
  }

  getPages() {
    this.http.get(`${this.wpRestApiUrl}/wp/v2/pages`).subscribe((pages) => {
      console.dir(pages);
    });
  }

  getPost(postId: number) {
    this.http.get(`${this.wpRestApiUrl}/wp/v2/posts/${postId}`).subscribe((post) => {
      console.dir(post);
    });
  }

  updatePost(postId: number, patchValue: any) {
    this.http.post(`${this.wpRestApiUrl}/wp/v2/posts/${postId}`, patchValue).subscribe((response) => {
      console.dir(response);
    });
  }

  getPosts() {
    this.http.get(`${this.wpRestApiUrl}/wp/v2/posts`).subscribe((posts) => {
      console.dir(posts);
    });

  }






}
