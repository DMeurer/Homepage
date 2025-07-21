import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedirectComponent } from './redirect.component';

describe('RedirectComponent', () => {
  let component: RedirectComponent;
  let fixture: ComponentFixture<RedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedirectComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(RedirectComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize countdown based on redirectDelay', () => {
    component.redirectDelay = 5000;
    component.ngOnInit();
    expect(component.countdown).toBe(5);
  });

  it('should not redirect if redirectUrl is empty', () => {
    spyOn(console, 'error');
    component.redirectUrl = '';
    component.ngOnInit();
    expect(console.error).toHaveBeenCalledWith('RedirectComponent: redirectUrl is required');
  });

  it('should have default values', () => {
    expect(component.redirectUrl).toBe('');
    expect(component.projectName).toBe('Project');
    expect(component.redirectDelay).toBe(3000);
  });
});