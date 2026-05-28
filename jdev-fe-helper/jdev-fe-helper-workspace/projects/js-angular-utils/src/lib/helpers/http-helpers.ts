import { HttpParams } from "@angular/common/http";


export interface CustomHttpParam {
    key: string;
    value: any;
    needToCheckValue?: boolean;
}

export function createHttpParams(customHttpParams: CustomHttpParam[]): HttpParams {
    return addParamsToHttpParamsProcess(new HttpParams(), customHttpParams);
}

export function addHttpParams(hp: HttpParams, customHttpParams: CustomHttpParam): HttpParams {
    if (customHttpParams.needToCheckValue) {
        if (customHttpParams.value === null || customHttpParams.value === undefined) {
            return hp;
        } else {
            return hp.append(customHttpParams.key, customHttpParams.value);
        }
    } else {
        return hp.append(customHttpParams.key, customHttpParams.value);
    }
}

function addParamsToHttpParamsProcess(hp: HttpParams, customHttpParams: CustomHttpParam[]): HttpParams {
    customHttpParams.forEach((currentCustomHttpParam) => {
        hp = addHttpParams(hp, currentCustomHttpParam);
    })
    return hp;
}