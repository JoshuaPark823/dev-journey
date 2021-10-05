import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMainComponent } from './explore-main.component';

describe('ExploreMainComponent', () => {
  let component: ExploreMainComponent;
  let fixture: ComponentFixture<ExploreMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
