import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwInputComponent } from './aw-input.component';

describe('AwInputComponent', () => {
  let component: AwInputComponent;
  let fixture: ComponentFixture<AwInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
