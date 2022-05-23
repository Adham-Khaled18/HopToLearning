import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestroutComponent } from './testrout.component';

describe('TestroutComponent', () => {
  let component: TestroutComponent;
  let fixture: ComponentFixture<TestroutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestroutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestroutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
