import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { EmailsEditorComponent } from './emails-editor/emails-editor.component';
import { EmailsEditorDialogComponent } from './emails-editor-dialog/emails-editor-dialog.component';
import { EmailObjectComponent } from './emails-editor/email-object/email-object.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailsEditorComponent,
    EmailsEditorDialogComponent,
    EmailObjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
