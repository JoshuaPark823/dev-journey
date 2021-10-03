import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteMainComponent } from './write-main.component';

describe('WriteMainComponent', () => {
  let component: WriteMainComponent;
  let fixture: ComponentFixture<WriteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
