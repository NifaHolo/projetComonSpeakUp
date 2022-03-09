import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireespComponent } from './questionnaireesp.component';

describe('QuestionnaireespComponent', () => {
  let component: QuestionnaireespComponent;
  let fixture: ComponentFixture<QuestionnaireespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireespComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
