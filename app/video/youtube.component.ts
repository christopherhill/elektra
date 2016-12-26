'use strict';

import { Input, Component, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'youtube-video',
  styles: [`
    .youtube-video-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;
    }
    .youtube-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `],
  template: `
    <div class="youtube-video-wrapper">
      <iframe class="youtube-video" [src]="uri | safeUrl" frameborder="0" allowfullscreen></iframe>
    </div>
  `,
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
    return `https://www.youtube.com/embed/${id}`;
  }

}
