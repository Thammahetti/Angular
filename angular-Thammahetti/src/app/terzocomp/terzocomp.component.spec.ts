import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzocompComponent } from './terzocomp.component';

describe('TerzocompComponent', () => {
  let component: TerzocompComponent;
  let fixture: ComponentFixture<TerzocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerzocompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TerzocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
