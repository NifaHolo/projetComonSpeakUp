import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescnivComponent } from './descniv.component';

describe('DescnivComponent', () => {
  let component: DescnivComponent;
  let fixture: ComponentFixture<DescnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescnivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
