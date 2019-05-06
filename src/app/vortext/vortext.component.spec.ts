import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VortextComponent } from './vortext.component';

describe('VortextComponent', () => {
  let component: VortextComponent;
  let fixture: ComponentFixture<VortextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VortextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VortextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
