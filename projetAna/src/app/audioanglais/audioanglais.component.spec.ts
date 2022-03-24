import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioanglaisComponent } from './audioanglais.component';

describe('AudioanglaisComponent', () => {
  let component: AudioanglaisComponent;
  let fixture: ComponentFixture<AudioanglaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioanglaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioanglaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
