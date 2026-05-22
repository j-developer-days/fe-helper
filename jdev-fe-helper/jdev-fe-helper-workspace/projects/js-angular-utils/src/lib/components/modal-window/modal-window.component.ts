import { Component, ElementRef, inject, input, InputSignal, output, OutputEmitterRef, Signal, signal, viewChild, WritableSignal } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jdev-modal-window',
  standalone: false,
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.scss',
})
export class ModalWindowComponent {

  //component variables-------------------------------------------------------
  modalWindow: WritableSignal<NgbModalRef | null> = signal<NgbModalRef | null>(null);
  modal: Signal<ElementRef<any> | undefined> = viewChild<ElementRef>('modalWindow');
  private config: NgbModalConfig = inject(NgbModalConfig);
  modalService: NgbModal = inject(NgbModal);
  //component input variables-------------------------------------------------
  // windowName: InputSignal<string> = input.required<string>();
  showCloseButtonInFooter = input<boolean>();

  //'sm' | 'lg' | 'xl'
  modalWindowSizeInput: InputSignal<string | undefined> = input<string>();
  //'sm' | 'md' | 'lg' | 'xl' | 'xxl' | boolean
  modalWindowFullscreenInput: InputSignal<string | boolean | undefined> = input<string | boolean>();
  //component output variables------------------------------------------------
  closeWindowOutput: OutputEmitterRef<boolean> = output();
  //component model variables-------------------------------------------------

  constructor() {
    this.config.backdrop = 'static';
    this.config.keyboard = false;
  }

  //lifecycle hooks-----------------------------------------------------------
  //component functions-------------------------------------------------------
  //component events----------------------------------------------------------
  openModalWindowClickEvent() {
    // debugger
    // debugInner('this.modalWindow', this.modalWindow() === null, this.modalWindow());
    // debugInner('this.modalService', this.modalService);
    // debugInner('this.modal', this.modal());
    this.modalWindow.set(this.modalService.open(this.modal(),
      {
        size: this.modalWindowSizeInput() === undefined ? 'xl' : this.modalWindowSizeInput(),
        fullscreen: this.modalWindowFullscreenInput() === undefined ? 'xxl' : this.modalWindowFullscreenInput()
      }
    ));
  }

  closeOrDismissModalWindowClickEvent(isCloseOperation: boolean) {
    if (this.modalWindow() != null) {
      isCloseOperation ? this.modalWindow()?.close() : this.modalWindow()?.dismiss();
      this.modalWindow.set(null);
      this.closeWindowOutput.emit(true);
    }
  }
  //another component events--------------------------------------------------
  //http call area------------------------------------------------------------
  //private-------------------------------------------------------------------

}