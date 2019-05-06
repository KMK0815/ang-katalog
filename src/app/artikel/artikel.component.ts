import { Component, OnInit, Input, Output } from '@angular/core';
import { ArtikelData } from '../interfaces/artikel-data'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: [
    './artikel.component.scss'
  ]
})
export class ArtikelComponent implements OnInit {
  @Input() artikelData: ArtikelData;
  @Input() similarArtikelData: any;
  @Input() artikelVortext: string = "";
  @Output() collapseClicked = new EventEmitter();

  similarKeys: Array<string>;
  imageList: String[] = [];
  chosenImage: number = 0;

  constructor() { }

  onClick(){
    this.collapseClicked.emit('collapseClick');
  }

  ngOnInit() {
    // if(this.similarArtikelData){
    //   this.similarKeys = Object.keys(this.similarArtikelData)
    // }
    
    this.fetchNextImage(0);
  }

  fetchNextImage(i: number){
    let link = `/images/Produkte/RZ24/pics/${this.artikelData.Artikelnummer}_${i}_web.png`;
    if (i === 0)
      link = `/images/Produkte/RZ24/pics/${this.artikelData.Artikelnummer}_web.png`;
    fetch(link)
      .then( response => {
        if(response.ok){
          this.imageList.push(link);
          this.fetchNextImage(i + 1)
        }
      })
  }

  imageClick(){
    if(this.chosenImage + 1 == this.imageList.length){
      this.chosenImage = 0;
    }
    else{
      this.chosenImage += 1;
    }
  }
}
