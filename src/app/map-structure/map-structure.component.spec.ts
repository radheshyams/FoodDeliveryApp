import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStructureComponent } from './map-structure.component';

describe('MapStructureComponent', () => {
  let component: MapStructureComponent;
  let fixture: ComponentFixture<MapStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
