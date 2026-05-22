import { GRAMM_TO_MICRO_GRAMM } from "../constants/common";

export const convertFromMicroGrammToGramm = (input: number | null): number => {
    return convertFromMicroGrammToGrammWithReturnNull(input, false)!;
}

export const convertFromMicroGrammToGrammWithReturnNull = (input: number | null, returnNull: boolean): number | null => {
    if (input === null) {
        return returnNull ? null : 0;
    }
    return input / GRAMM_TO_MICRO_GRAMM;
}

export const convertFromGrammToMicroGramm = (input: number | null): number => {
    if (input === null) {
        return 0;
    }
    return input * GRAMM_TO_MICRO_GRAMM;
}