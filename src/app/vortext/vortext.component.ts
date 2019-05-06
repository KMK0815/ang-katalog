import { Component, OnInit, Input } from '@angular/core';
import { ArtikelData } from '../interfaces/artikel-data';

@Component({
  selector: 'app-vortext',
  templateUrl: './vortext.component.html',
  styleUrls: ['./vortext.component.scss']
})
export class VortextComponent implements OnInit {
  @Input() artikelData: ArtikelData;

  toggleAusblenden: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.toggleAusblenden = (!this.toggleAusblenden);
  }

}
