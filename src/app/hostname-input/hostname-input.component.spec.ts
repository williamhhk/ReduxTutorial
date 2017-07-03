import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostnameInputComponent } from './hostname-input.component';

describe('HostnameInputComponent', () => {
  let component: HostnameInputComponent;
  let fixture: ComponentFixture<HostnameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostnameInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostnameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
