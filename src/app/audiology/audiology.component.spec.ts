import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiologyComponent } from './audiology.component';

describe('AudiologyComponent', () => {
  let component: AudiologyComponent;
  let fixture: ComponentFixture<AudiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
