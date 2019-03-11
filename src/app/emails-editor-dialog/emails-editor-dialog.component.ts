import {Component, ViewChild} from '@angular/core';
import {EmailsEditorComponent} from '../emails-editor/emails-editor.component';
import {EmailService} from '../emails-editor/email-service/email.service';

@Component({
  selector: 'app-emails-editor-dialog',
  templateUrl: './emails-editor-dialog.component.html',
  styleUrls: ['./emails-editor-dialog.component.css']
})
export class EmailsEditorDialogComponent {

  @ViewChild(EmailsEditorComponent)
  private emailsEditor: EmailsEditorComponent;

  constructor(private emailService: EmailService) { }

  addRandomEmailClick(): void {
    this.emailsEditor.addRandomEmail(this.emailService.generateEmail());
  }
  getEmailsCountClick(): void {
    alert(`Email count is ${this.emailsEditor.getEmailsCount()}`);
  }

}
