import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpongeAnimationComponent } from './sponge-animation.component';

describe('SpongeAnimationComponent', () => {
  let component: SpongeAnimationComponent;
  let fixture: ComponentFixture<SpongeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpongeAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpongeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
