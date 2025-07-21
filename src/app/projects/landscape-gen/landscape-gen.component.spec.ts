import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeGenComponent } from './landscape-gen.component';

describe('LandscapeGenComponent', () => {
  let component: LandscapeGenComponent;
  let fixture: ComponentFixture<LandscapeGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandscapeGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandscapeGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
