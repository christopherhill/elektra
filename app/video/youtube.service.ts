var $ = require('jquery');
// import { APIHttpService } from './../../shared/api/api-http.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const API_KEY = require('./../config/youtube.json').API_KEY;

@Injectable()
export class YouTubeAPI {

  constructor(public http: Http) {};

  search(query: string) {
    console.log('searching..');
    const URI = `https://www.googleapis.com/youtube/v3/search`;
    return this.http.get(`${URI}?q=${query}&key=${API_KEY}&part=snippet`);
  }

  // parse relevant info
  public extract(collection) {
   return collection.map((entry) => { return { id: entry.id.videoId, title: entry.snippet.title }});
  }

};