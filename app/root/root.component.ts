'use strict';

import { Input, Component, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

// providers below reflect component wide sharing
@Component({
	selector: 'root',
	styles: [require('./root.sass').toString()],
	template: require('./root.html')
})

export class RootComponent {

	constructor(
		private DomSanitizer: DomSanitizer,
		public router: Router
	) {}

	ngOnDestroy() {
	}

	ngOnInit() {
  }

}
