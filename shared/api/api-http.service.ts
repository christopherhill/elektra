import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs';
import Rxmq from 'rxmq';

@Injectable()
export class APIHttpService extends Http {

  channel: any;

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions
  ) {
    super(backend, defaultOptions);
    this.channel = Rxmq.channel('http');
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log('request...');
    this.channel.subject('request').next({ progress: true });
    return super.request(url, options).catch(res => {
      return this.channel.subject('request').next({ progress: false });
    });
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('get...');
    this.channel.subject('request').next({ progress: true });
    return super.get(url, options).catch(res => {
      return this.channel.subject('request').next({ progress: false });
    });
  };

  post(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('post...');
    this.channel.subject('request').next({ progress: true });
    return super.get(url, options).catch(res => {
      return this.channel.subject('request').next({ progress: false });
    });
  };

  put(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('put...');
    this.channel.subject('request').next({ progress: true });
    return super.get(url, options).catch(res => {
      return this.channel.subject('request').next({ progress: false });
    });
  };

  patch(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('patch...');
    this.channel.subject('request').next({ progress: true });
    return super.get(url, options).catch(res => {
      return this.channel.subject('request').next({ progress: false });
    });
  };

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('del...');
    this.channel.subject('request').next({ progress: true });
    return super.get(url, options).catch(res => {
      return this.channel.subject('request').next({ progress: false });
    });
  };

}
