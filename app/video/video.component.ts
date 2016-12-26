'use strict';

import { Input, Component, EventEmitter } from '@angular/core';
import { YouTubeAPI } from './youtube.service';


@Component({
  selector: 'elektra-video',
  template: require('./video.html')
})

export class VideoComponent {

  @Input() videos: any;

	constructor(
    public yt: YouTubeAPI
	) {}

	ngOnInit() {
    this.yt.search('Carlos Kleiber').subscribe((data: any) => {
      console.log('data', data);
      this.videos = this.yt.extractIds(data.items);
    });
  }

}
