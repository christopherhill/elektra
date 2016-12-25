'use strict';

import { Input, Component, EventEmitter } from '@angular/core';
var logo = require('./../../assets/logo.svg');

@Component({
  selector: 'entity',
  template: require('./entity.html')
})

export class EntityComponent {

  @Input() logo = logo;

	constructor(
	) {}

	ngOnDestroy() {
	}

	ngOnInit() {
  }

}
