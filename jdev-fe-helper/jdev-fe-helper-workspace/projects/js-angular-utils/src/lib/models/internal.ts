export interface Error {
  errorMessage: string;
  errorCheck: any;
  errorStatus: boolean;
}

export interface Range<T> {
  min: T;
  max: T;
}

export interface Field<T, MM> {
  fieldData: T;
  requiredError: Error | null;
  errors: Error[];
  hasYetErrors: boolean;
  range: Range<MM>;
}

export interface AlertType {
  alertType: string;
  alertTimeOutInSeconds: number;
  alertTimeOutInSecondsCurrent?: number;
  showCloseButton: boolean;
  textToShow: string;
}