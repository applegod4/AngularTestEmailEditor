import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EmailService} from '../email-service/email.service';

@Component({
  selector: 'app-email-object',
  templateUrl: './email-object.component.html',
  styleUrls: ['./email-object.component.css']
})
export class EmailObjectComponent {
  @Input() emailObject: String;
  @Output() deleteEmailObject = new EventEmitter();

  constructor(private emailService: EmailService) {
  }

  getClass(): String {
    if (this.emailService.validateEmail(this.emailObject)) {
      return 'email-object__correct';
    } else {
      return 'email-object__incorrect';
    }
  }

  deleteObject(): void {
    this.deleteEmailObject.emit(this.emailObject);
  }
}
