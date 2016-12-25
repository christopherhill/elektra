'use strict';

import { Input, Component, EventEmitter } from '@angular/core';
import './youtube.auth';

var logo = require('./../../assets/logo.svg');

@Component({
  selector: 'elektra-video',
  template: require('./video.html')
})

export class VideoComponent {

  @Input() logo = logo;

	constructor(
	) {}

  auth() {
  }

	ngOnDestroy() {
	}

	ngOnInit() {
  }

}
