'use strict';

export class APIService {

	isLocal: boolean = false;
	url: string = '';
	w: string = window.location.hostname;
	p: string = window.location.protocol;
	t: string = window.location.port;

	constructor() {
	}

	get(type) {
		return this.url[type];
	}

};
