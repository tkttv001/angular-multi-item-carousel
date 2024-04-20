import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMultiItemCarouselComponent } from './angular-multi-item-carousel.component';

describe('AngularMultiItemCarouselComponent', () => {
  let component: AngularMultiItemCarouselComponent;
  let fixture: ComponentFixture<AngularMultiItemCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMultiItemCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularMultiItemCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
