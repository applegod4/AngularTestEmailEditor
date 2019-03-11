import {Component, ElementRef, ViewChild} from '@angular/core';
import {EmailService} from './email-service/email.service';
import {Keycodes} from '../keycodes.enum';

@Component({
  selector: 'app-emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.css']
})
export class EmailsEditorComponent {
  @ViewChild('emailInput') emailInput: ElementRef;

  emailObjects: String[] = [];
  placeholderText: String = 'add more people...';
  inputModel: String = '';
  Keycodes: typeof Keycodes = Keycodes;

  constructor(private emailService: EmailService) { }

  addRandomEmail(email: String): void {
    this._addEmail(email);
  }
  getEmailsCount(): number {
    return this.emailObjects.length;
  }

  _deleteObject(emailObject: String): void {
    if (this.emailObjects.indexOf(emailObject) > -1) {
      this.emailObjects.splice(index, 1);
    }
  }
  _focusOnInput(): void {
    this.emailInput.nativeElement.focus();
  }
  _onFocusOut(): void {
    this._addEmailFromInput();
  }
  _onKeyUp($event: KeyboardEvent): void {
     if ($event.keyCode === Keycodes.ENTER) {
      this._addEmailFromInput();
    }
    if (($event.ctrlKey || $event.metaKey) && $event.keyCode === Keycodes.V) {
      if (this.emailService.validateEmail(this.inputModel)) {
        this._addEmailFromInput();
      }
    }
    if ($event.keyCode === Keycodes.COMMA) {
      this.inputModel =   this.inputModel.slice(0, -1);
      this._addEmailFromInput();
    }
  }
  private _addEmailFromInput(): void {
    if (this.inputModel.length > 0 && !this._isThereEmailDuplicate(this.inputModel)) {
      this._addEmail(this.inputModel);
      this.inputModel = '';
    } else {
      this.inputModel = '';
    }
  }
  private _addEmail(email: String): void {
    this.emailObjects.push(email);
  }
  private _isThereEmailDuplicate(value: String): boolean {
    return this.emailObjects.findIndex((v) => v === value) >= 0;
  }
}
