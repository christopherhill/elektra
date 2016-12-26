'use strict';

import { Input, Component, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'youtube-video',
  template: `
    <iframe width="560" height="315" [src]="uri" frameborder="0" allowfullscreen></iframe>
  `
})

export class YouTubeVideoComponent {

  @Input() videoId: string;
  @Input() uri: any;

	constructor(
    public sanitizer: DomSanitizer
	) {}

	ngOnInit() {
    console.log('videoId: ', this.videoId);
    this.uri = this.getEmbedCode(this.videoId);
  }
  
  getEmbedCode(id) {
    console.log('embed code: ', id);
    return this.sanitizer.bypassSecurityTrustUrl(`https://www.youtube.com/embed/${id}`);
  }

}
