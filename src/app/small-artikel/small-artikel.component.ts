import { Component, OnInit, Input } from '@angular/core';
import { ArtikelData } from '../interfaces/artikel-data';

@Component({
  selector: 'app-small-artikel',
  templateUrl: './small-artikel.component.html',
  styleUrls: ['./small-artikel.component.scss']
})
export class SmallArtikelComponent implements OnInit {
  @Input() artikelData: ArtikelData;
  
  showDetails: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(event: Event) {
    this.showDetails = !this.showDetails;
  }

  // limitArtikeldetails(){
  //   this.artikelData.LangtextHTML
  // }
}
