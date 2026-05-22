import { Component, model, signal, ModelSignal, OnInit, OnDestroy } from '@angular/core';
import { AlertType } from '../../models/internal';
import { WrapperArray } from '../../models/common';

@Component({
  selector: 'jdev-notifications',
  standalone: false,
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent implements OnInit, OnDestroy {

  private intervalRef: any;

  //component variables-------------------------------------------------------
  showAlert = signal<boolean>(true);
  alertTimeOutInSeconds = signal<number>(5);

  //component input variables-------------------------------------------------
  //component output variables------------------------------------------------
  //component model variables-------------------------------------------------
  alertsModel: ModelSignal<WrapperArray<AlertType> | undefined> = model<WrapperArray<AlertType>>();
  //component injections and viewChildren-------------------------------------
  //lifecycle hooks-----------------------------------------------------------
  ngOnInit(): void {
    this.processOfAlert();
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }

  constructor() { }

  //component functions-------------------------------------------------------
  //component events----------------------------------------------------------
  closeButtonClickEvent(index: number): void {
    this.alertsModel.update((signalValue: WrapperArray<AlertType> | undefined) => {
      if (signalValue === undefined) {
        return signalValue;
      } else {
        signalValue.wrapper.splice(index, 1);
        return { ...signalValue };
      }
    });
  }
  //another component events--------------------------------------------------
  //http call area------------------------------------------------------------
  //private-------------------------------------------------------------------
  private clearInterval() {
    clearInterval(this.intervalRef);
    this.intervalRef = undefined;
  }

  private processOfAlert() {
    this.intervalRef = setInterval(() => {
      this.alertsModel.update((signalValue: WrapperArray<AlertType> | undefined) => {
        if (signalValue === undefined) {
          return signalValue;
        } else {
          if (signalValue.wrapper.length === 0) {
            return signalValue;
          }
          signalValue.wrapper.forEach((value) => {
            if (!value.alertTimeOutInSecondsCurrent) {
              value.alertTimeOutInSecondsCurrent = value.alertTimeOutInSeconds;
            }
            value.alertTimeOutInSecondsCurrent = value.alertTimeOutInSecondsCurrent - 1;
          });

          let index;
          while (true) {
            index = signalValue.wrapper.findIndex((value) => {
              if (value.alertTimeOutInSecondsCurrent) {
                return value.alertTimeOutInSecondsCurrent <= 0;
              }
              return -1;
            });
            if (index >= 0) {
              signalValue.wrapper.splice(index, 1);
            } else {
              break;
            }
          }
          return { ...signalValue }
        }
      });
    }, 1000);
  }

}