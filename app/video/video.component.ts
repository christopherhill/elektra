'use strict';

import { Input, Component, EventEmitter } from '@angular/core';
import { YouTubeAPI } from './youtube.service';
import Rxmq from 'rxmq';

@Component({
  selector: 'elektra-video',
  template: require('./video.html')
})

export class VideoComponent {

  @Input() videos: any;
  channel: any;
  @Input() search: string;

	constructor(
    public yt: YouTubeAPI
	) {
    this.search = 'Richard Strauss Alpensinfonie';
    this.channel = Rxmq.channel('search');
  }

	ngOnInit() {
    this.getSearchResults(this.search);
    this.channel.observe('change').subscribe((data) => {
      console.log('oooh', data)
      this.search = data.value;
      this.getSearchResults(this.search);
    })
  }


  getSearchResults(query: string) {
    this.yt.search(query).subscribe((data: any) => {
      console.log('data', data);
      this.videos = this.yt.extractIds(data.items);
      console.log('set: ', this.videos)
    });
  }

  
}
