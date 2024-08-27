import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoclogingComponent } from './docloging.component';

describe('DoclogingComponent', () => {
  let component: DoclogingComponent;
  let fixture: ComponentFixture<DoclogingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoclogingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoclogingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
