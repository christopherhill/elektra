'use strict';

import { Input, Component } from '@angular/core';
import Rxmq from 'rxmq';


import { DropdownModule } from 'ng2-bootstrap/dropdown';
var composers = require('./../config/composers.json');
var artists = require('./../config/artists.json');
var conductors = require('./../config/conductors.json');
var ensembles = require('./../config/ensembles.json');
var genres = require('./../config/genres.json');
var orchestras = require('./../config/orchestras.json');

@Component({
  selector: 'navbar',
  template: require('./navbar.html')
})
export class NavbarComponent {

  channel: any;
  @Input() searchModel: string = 'Elektra';
  @Input() searchField: string;
  @Input() composers: any = composers;
  @Input() conductors: any = conductors;
  @Input() orchestras: any = orchestras;
  @Input() artists: any = artists;
  @Input() selectedConductor: any = '';
  @Input() selectedOrchestra: any = '';
  @Input() selectedArtist: any = '';
  @Input() selectedComposer: any = 'Richard Strauss';


  constructor() {
    this.channel = Rxmq.channel('search');
  }

  ngOnInit() {
    this.searchField = '';
  }

  searchChange(event) {

  }
  
  onChange(event) {
    console.log('change', event);
    let q = `${this.selectedComposer},${this.selectedConductor},${this.selectedOrchestra},${this.selectedArtist},${this.searchModel}`;
    console.log('query', q);
    this.channel.subject('change').next({ change: true, value: q });
  }
  // }

  // onChange(value) {
  //   console.log('change', value);
  //   this.channel.subject('change').next({ change: true, value: value });
  // }

}