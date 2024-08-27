import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateappoinmentComponent } from './createappoinment.component';

describe('CreateappoinmentComponent', () => {
  let component: CreateappoinmentComponent;
  let fixture: ComponentFixture<CreateappoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateappoinmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
