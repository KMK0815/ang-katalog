import { Component, OnInit, Input } from '@angular/core';
import { ArtikelData } from './interfaces/artikel-data';

@Component({
  selector: 'app-root',
  // template: `
  //  <div id="k2Container"><app-artikel *ngFor="let artikel of this.filteredArtikelData; index as i;" [artikelVortext]="allVortextData[i]" [artikelData]="artikel" [similarArtikelData]="allTagData[i]"></app-artikel></div>
  // `,
  template: `
      <div id="k2Container">
        <app-artikel-liste [allArtikelData]="filteredKategorieData"></app-artikel-liste>
      </div>
   `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
    let url = new URL(window.location.href);
    let urlComponents = url.pathname.split('/');

    let kategorie = urlComponents[urlComponents.length - 1] ? urlComponents[urlComponents.length - 1] : urlComponents[urlComponents.length - 2];
    let tagActive = kategorie.slice(0, 4).includes('tag-');
    let tags = kategorie.slice(4).split('-');
    let kategories = kategorie.split('-');

    let dataURL: String = document['katalog_data_link'];

    fetch(`${dataURL}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.data = data;
        return data;
      })
      .then(o => {
        // if(urlComponents.includes('item')){
        //   this.viewType = 'artikelDetails'
        //   this.filteredArtikelData = this.data.filter(
        //     value => ((value.Sprache === 'ZAN' && encodeURI(value.Bezeichnung1) === urlComponents[urlComponents.length - 2]) ? true : false)
        //   )
        // }
        // else{
        this.viewType = 'kategorie'
        // }

        if (!tagActive) {
          // console.log(kategories)

          // this.filteredArtikelData = this.data.filter(
          //   value => {
          //     if (value.Sprache === 'ZAN') return true;
          //     else return false;
          //   }
          // )

          // for (let i in this.filteredArtikelData) {
          //   let tmp = this.data.filter(
          //     value => (value.Sprache === 'ZVO' && value.LangtextHTML !== undefined && value.USER_Kataloggruppe === this.filteredArtikelData[i].USER_Kataloggruppe && value.USER_Katalogindex === this.filteredArtikelData[i].USER_Katalogindex)
          //   )
          //   this.allVortextData[i] = tmp[0] && tmp[0].LangtextHTML ? tmp[0].LangtextHTML : ''
          // }

          // console.log(urlComponents[urlComponents.length - 2].replace('/', ''))

          this.filteredKategorieData = this.data.filter(
            value => {
              for (let i = 0; i < kategories.length; i++) {
                kategorie = kategories[i];
                if (value.USER_Kataloggruppe && value.USER_Kataloggruppe.toLowerCase().includes(kategorie)) return true;
              }
              return false;
            }
          )

          if (this.filteredKategorieData.length === 0) {
            this.filteredKategorieData = this.data;
          }
        }
        else {
          // console.log(tags)
          this.filteredKategorieData = []
          for (let i = 0; i < tags.length; i++) {
            let tmp = this.data.filter(value => {
              if (value.USER_KatalogTAG) return value.USER_KatalogTAG.toLowerCase().includes(tags[i]);
              else return false;
            });
            this.filteredKategorieData = [].concat(this.filteredKategorieData, tmp);
            // console.log({ key: tags[i], data: tmp })
          }

        }


        // console.log(this.filteredKategorieData)
      })
      .catch(err => {
        console.error(err);
      });





  }

  title = 'angular-katalog';
  viewType: string;
  filteredArtikelData: ArtikelData[];
  filteredKategorieData: ArtikelData[];
  tagData: any = {};
  allTagData: Array<any> = [];
  allVortextData: Array<string> = [];
  data: ArtikelData[] = [];
}
