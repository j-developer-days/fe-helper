import { FormControl } from "@angular/forms";

export function formControlSetValue<T>(formControl: FormControl<T>, value: T): void {
    formControl.setValue(value);
}