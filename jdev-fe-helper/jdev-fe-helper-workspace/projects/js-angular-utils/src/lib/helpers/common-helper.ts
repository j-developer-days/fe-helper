import { WritableSignal } from "@angular/core";
import { Field } from "../models/internal";

export const setEmptyForStringField = (signalFieldString: WritableSignal<Field<string, any>>): void => {
    signalFieldString.update(signalValue => ({
        ...signalValue,
        fieldData: ''
    }));
}

export const debug = (message?: any, ...optionalParams: any[]): void => {
    console.log(message, ...optionalParams);
}