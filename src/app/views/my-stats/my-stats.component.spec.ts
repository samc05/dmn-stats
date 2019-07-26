import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingStatsComponent } from './coding-stats.component';

describe('CodingStatsComponent', () => {
  let component: CodingStatsComponent;
  let fixture: ComponentFixture<CodingStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
