import { WritableSignal } from "@angular/core";
import { Error, Field } from "../models/internal";
import { AddToField } from "../models/validation";
import { SPACES_PATTERN } from "../constants/validation";

export function getErrorForRequired(fieldName: string): Error {
    return {
        errorMessage: `${fieldName} field cannot be empty! ${fieldName} is required!`,
        errorCheck: false,
        errorStatus: true
    }
}

export const ifStringIsNullOrEmpty = (input: string): boolean => {
    return !input || input.length === 0;
}

export const checkIfRequiredNeedErrorCheck = (input: WritableSignal<Field<string, number>>): void => {
    input.update(signalValue => {
        if (signalValue.requiredError === null) {
            return signalValue;
        } else {
            signalValue.requiredError.errorCheck = () => ifStringIsNullOrEmpty(input().fieldData);
            return {
                ...signalValue
            };
        }
    });
}

export const addForFieldMinAndMaxRange = (signalFieldString: WritableSignal<Field<any, number>>, addToField: AddToField): void => {
    const currentValue = signalFieldString();
    const errors: Error[] = currentValue.errors;
    if (addToField === AddToField.MIN_ONLY || addToField === AddToField.MIN_MAX || addToField === AddToField.MIN_MAX_NOT_ALLOW_SPACES) {
        errors.push(getErrorForMinLength(currentValue.range.min));
    }
    if (addToField === AddToField.MAX_ONLY || addToField === AddToField.MIN_MAX || addToField === AddToField.MIN_MAX_NOT_ALLOW_SPACES) {
        errors.push(getErrorForMaxLength(currentValue.range.max));
    }
    if (addToField === AddToField.MIN_MAX_NOT_ALLOW_SPACES) {
        errors.push(getErrorForNotAllowedSpaces());
    }
    if (addToField === AddToField.MIN_MAX_NUMBER) {
        errors.push({
            errorMessage: 'Not right data!',
            errorCheck: () => {
                const fieldData = signalFieldString().fieldData;
                return fieldData === null
                    || fieldData === ''
                    || parseFloat(fieldData) > currentValue.range.max
                    || parseFloat(fieldData) < currentValue.range.min
            },
            errorStatus: true
        });
    }

    signalFieldString.update(signalValue => ({
        ...signalValue,
        errors
    }));
}

export const getErrorForMinLength = (minLength: number): Error => {
    return getErrorForMinMaxLength(true, minLength);
}

export const getErrorForMaxLength = (maxLength: number): Error => {
    return getErrorForMinMaxLength(false, maxLength);
}

export const getErrorForNotAllowedSpaces = (): Error => {
    return {
        errorMessage: 'This field not allowed spaces! Please remove spaces',
        errorCheck: (fieldData: string) => regexTest(fieldData, SPACES_PATTERN),
        errorStatus: true
    }
}

export const regexTest = (inputText: string, inputPattern: RegExp): boolean => {
    return inputPattern.test(inputText);
}

export const commonErrorStatusCheck = (input: WritableSignal<Field<string | number, number>>): void => {
    input.update(signalValue => {
        if (signalValue.requiredError !== null) {
            signalValue.requiredError.errorStatus = signalValue.requiredError.errorCheck();
        }

        signalValue.errors.forEach((value) => value.errorStatus = value.errorCheck(input().fieldData));

        if (signalValue.requiredError && signalValue.requiredError.errorStatus
            && signalValue.requiredError.errorStatus === true) {
            signalValue.hasYetErrors = true;
        } else {
            signalValue.hasYetErrors = false;

            let i = signalValue.errors.length - 1;
            for (; i >= 0; i--) {
                const value = signalValue.errors[i];
                if (value.errorStatus && value.errorStatus === true) {
                    signalValue.hasYetErrors = true;
                    break;
                }
            }
            if (i === -1) {
                signalValue.hasYetErrors = false;
            }
        }

        return {
            ...signalValue
        };
    });
}

export const checkIfIsNumberIsNaN = (input: WritableSignal<Field<string, number>>): void => {
    input.update(signalValue => {
        if (signalValue.requiredError === null) {
            return signalValue;
        } else {
            signalValue.requiredError.errorCheck = () => {
                const fieldDataTemp = input().fieldData;
                if (fieldDataTemp === '') {
                    return true;
                }
                return isNaN(parseFloat(fieldDataTemp));
            };
            return {
                ...signalValue
            };
        }
    });
}

export const checkIfRequiredIsIntErrorCheck = (input: WritableSignal<Field<string, number>>): void => {
    input.update(signalValue => {
        if (signalValue.requiredError === null) {
            return signalValue;
        } else {
            signalValue.requiredError.errorCheck = () => {
                const fieldDataTemp = input().fieldData;
                if (fieldDataTemp === '') {
                    return true;
                }
                const it = parseInt(fieldDataTemp);
                return it < 0;
            };
            return {
                ...signalValue
            };
        }
    });
}



const getErrorForMinMaxLength = (isMin: boolean, length: number): Error => {
    const errorMessage = `M${isMin ? 'in' : 'ax'} length ${isMin ? 'should' : 'cannot'} be ${length} symbols!`;
    return {
        errorMessage,
        errorCheck: (fieldData: string) => isMin ? (fieldData.length < length) : (fieldData.length > length),
        errorStatus: true
    };
}