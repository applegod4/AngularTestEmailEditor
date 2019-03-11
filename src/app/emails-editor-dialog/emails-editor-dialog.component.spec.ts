import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsEditorDialogComponent } from './emails-editor-dialog.component';

describe('EmailsEditorDialogComponent', () => {
  let component: EmailsEditorDialogComponent;
  let fixture: ComponentFixture<EmailsEditorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsEditorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
