import { Component, OnInit, Input } from '@angular/core';
import { ArtikelData } from '../interfaces/artikel-data';

@Component({
  selector: 'app-artikel-liste',
  templateUrl: './artikel-liste.component.html',
  styleUrls: ['./artikel-liste.component.scss']
})
export class ArtikelListeComponent implements OnInit {
  @Input() allArtikelData: ArtikelData[];
  @Input() secondaryHeader: string;
  @Input() mainHeader: string;

  constructor() { }

  ngOnInit() {
  }

}
