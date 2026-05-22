import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountOfSymbolsShowComponent } from './components/count-of-symbols-show/count-of-symbols-show.component';
import { ValidationErrorShowComponent } from './components/validation-error-show/validation-error-show.component';
import { RequiredShowComponent } from './components/required-show/required-show.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { YesNoModalWindowComponent } from './components/yes-no-modal-window/yes-no-modal-window.component';

const arrayOfComponents = [
  CountOfSymbolsShowComponent,
  ModalWindowComponent,
  NotificationsComponent,
  RequiredShowComponent,
  ValidationErrorShowComponent,
  YesNoModalWindowComponent
];

@NgModule({
  declarations: arrayOfComponents,
  imports: [
    CommonModule
  ],
  // This is crucial: you must export what you want users to see
  exports: arrayOfComponents
})
export class JdebJsAngularUtilsModule { }