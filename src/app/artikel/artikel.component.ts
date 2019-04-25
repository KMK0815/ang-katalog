import { Component, OnInit, Input } from '@angular/core';
import { ArtikelData } from '../interfaces/artikel-data'

@Component({
  selector: 'app-artikel',
  template: `
    <div>
      <header><h1>{{ artikelData.Bezeichnung1 }}</h1></header>
      <div class="itemBody">
        <div class="itemFullText" [innerHTML]="(artikelVortext ? artikelVortext + '<br>' : '') + artikelData.LangtextHTML"></div>
      </div>
      <div class="itemExtraFields"></div>
      <ul class="gkBullet1">
        <li class="even typeTextfield group2">
          <span class="itemExtraFieldsLabel">Artikelnummer: </span>
          <span class="itemExtraFieldsValue">{{ artikelData.Artikelnummer }}</span>
        </li>
        <li class="odd typeImage group2">
          <span class="itemExtraFieldsLabel" style="float: left">Artikelbild: </span>
          <span class="itemExtraFieldsValue"><img [src]="'https://protronic-gmbh.de/images/Produkte/RZ24/pics/' + artikelData.Artikelnummer + '_web.png'" alt="" style="min-width: 500px; min-height: 500px"></span>
        </li>
      </ul>
      <div class="itemLinks">
        <div class="itemTagsBlock">
          <h3>Ähnliche Artikel</h3>
          <div *ngFor="let similarity of similarKeys; index as i;">
            <h4> {{ similarity }} </h4>
            <app-artikel-liste [allArtikelData]="similarArtikelData[similarity]" secondaryHeader="" mainHeader=""></app-artikel-liste>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: [
    './artikel.component.scss'
  ]
})
export class ArtikelComponent implements OnInit {
  @Input() artikelData: ArtikelData;
  @Input() similarArtikelData: any;
  @Input() artikelVortext: string = "";

  similarKeys: Array<string>;

  constructor() { }

  ngOnInit() {
    if(this.similarArtikelData){
      this.similarKeys = Object.keys(this.similarArtikelData)
    }
  }

}
