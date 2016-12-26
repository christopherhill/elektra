'use strict';

import { Input, Component } from '@angular/core';
import Rxmq from 'rxmq';

@Component({
  selector: 'navbar',
  template: require('./navbar.html')
})
export class NavbarComponent {

  channel: any;
  @Input() searchModel: string;
  @Input() searchField: string;

  constructor() {
    this.channel = Rxmq.channel('search');
  }

  ngOnInit() {
    this.searchField = '';
  }

  onChange(value) {
    console.log('change', value);
    this.channel.subject('change').next({ change: true, value: value });
  }

}