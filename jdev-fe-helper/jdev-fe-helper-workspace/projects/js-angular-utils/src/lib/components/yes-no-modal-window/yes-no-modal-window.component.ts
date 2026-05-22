import { Component, ElementRef, input, InputSignal, output, OutputEmitterRef, Signal, viewChild } from '@angular/core';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'jdev-yes-no-modal-window',
  standalone: false,
  templateUrl: './yes-no-modal-window.component.html',
  styleUrl: './yes-no-modal-window.component.scss',
})
export class YesNoModalWindowComponent {

  //component variables-------------------------------------------------------
  modalWindowYesNoForClearForm: Signal<ModalWindowComponent | undefined> = viewChild<ModalWindowComponent>('modalWindowForClearForm');
  //component input variables-------------------------------------------------
  modalTitleInput: InputSignal<string | undefined> = input<string | undefined>();
  modalQuestionInput: InputSignal<string | undefined> = input<string | undefined>();
  modalQuestionAnswerYesInput: InputSignal<string | undefined> = input<string | undefined>();
  modalQuestionAnswerNoInput: InputSignal<string | undefined> = input<string | undefined>();
  //component output variables------------------------------------------------
  yesButtonClickOutput: OutputEmitterRef<void> = output<void>();
  noButtonClickOutput: OutputEmitterRef<void> = output<void>();
  //component model variables-------------------------------------------------
  //component injections and viewChildren-------------------------------------
  yesButton = viewChild<ElementRef<HTMLInputElement>>('yesButton');
  //lifecycle hooks-----------------------------------------------------------
  //component functions-------------------------------------------------------
  //component events----------------------------------------------------------
  yesClickEvent() {
    this.yesButtonClickOutput.emit();
  }

  noClickEvent() {
    this.noButtonClickOutput.emit();
  }

  openClickEvent() {
    this.modalWindowYesNoForClearForm()?.openModalWindowClickEvent();
    this.yesButton()?.nativeElement.focus();
  }

  closeClickEvent() {
    this.modalWindowYesNoForClearForm()?.closeOrDismissModalWindowClickEvent(true);
  }
  //another component events--------------------------------------------------
  //http call area------------------------------------------------------------
  //private-------------------------------------------------------------------

}