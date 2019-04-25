import { Component, OnInit, Input } from '@angular/core';
import { ArtikelData } from '../artikel-data';

@Component({
  selector: 'app-small-artikel',
  templateUrl: './small-artikel.component.html',
  styleUrls: ['./small-artikel.component.scss']
})
export class SmallArtikelComponent implements OnInit {
  @Input() artikelData: ArtikelData;

  constructor() { }

  ngOnInit() {
  }

}
