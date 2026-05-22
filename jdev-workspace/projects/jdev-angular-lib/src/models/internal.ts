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