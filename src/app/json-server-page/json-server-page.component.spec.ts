import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonServerPageComponent } from './json-server-page.component';

describe('JsonServerPageComponent', () => {
  let component: JsonServerPageComponent;
  let fixture: ComponentFixture<JsonServerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonServerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonServerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
