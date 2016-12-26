'use strict';

import { NgModule } from '@angular/core';
import { XHRBackend, Http, HttpModule, ConnectionBackend } from '@angular/http';
import { APIHttpService } from './api-http.service';

@NgModule({
    imports: [
      HttpModule
    ],
    providers: [
      { provide: Http, useClass: APIHttpService },
      { provide: ConnectionBackend, useExisting: XHRBackend }    
    ],
    exports: [
      HttpModule
    ]
})

export class APIModule {};
