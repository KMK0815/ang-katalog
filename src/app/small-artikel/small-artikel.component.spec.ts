import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallArtikelComponent } from './small-artikel.component';

describe('SmallArtikelComponent', () => {
  let component: SmallArtikelComponent;
  let fixture: ComponentFixture<SmallArtikelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallArtikelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
