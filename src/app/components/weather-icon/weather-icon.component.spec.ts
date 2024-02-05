import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgIconComponent } from './weather-icon.component';
import { MatIcon } from '@angular/material/icon';

describe('SvgIconComponent', () => {
  let component: SvgIconComponent;
  let fixture: ComponentFixture<SvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIcon],
      declarations: [SvgIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
