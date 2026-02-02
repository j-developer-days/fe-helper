import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';

declare abstract class HttpParentService {
    protected readonly http: HttpClient;
    constructor();
}

declare function formControlSetValue<T>(formControl: FormControl<T>, value: T): void;

declare const REQUEST_PARAM_PAGE_NUMBER = "pageNumber";
declare const REQUEST_PARAM_QUERY = "query";
declare const REQUEST_PARAM_LIMIT = "limit";
declare const REQUEST_PARAM_NEXT_CURSOR = "nextCursor";
declare const REQUEST_PARAM_SIMILARITY = "similarity";
declare const REQUEST_PARAM_MATCH_SCORE = "matchScore";
declare const REQUEST_PARAM_LOCALE = "locale";
declare const RESPONSE_TYPE_JSON = "json";
declare const OBSERVE_RESPONSE = "response";
declare const OBSERVE_BODY = "body";
declare const HTTP_HEADER_CONTENT_TYPE = "content-type";
declare const MIME_TYPE_TEXT_PLAIN = "text/plain";

declare const debug: (message?: any, ...optionalParams: any[]) => void;

interface CustomHttpParam {
    key: string;
    value: any;
    needToCheckValue?: boolean;
}
declare function createHttpParams(customHttpParams: CustomHttpParam[]): HttpParams;
declare function addHttpParams(hp: HttpParams, customHttpParams: CustomHttpParam): HttpParams;

declare const WRITE_TO_LOCAL_STORAGE: (storageName: string, obj: any) => void;
declare const WRITE_TO_SESSION_STORAGE: (storageName: string, obj: any) => void;
declare const READ_FROM_LOCAL_STORAGE: (storageName: string) => any;
declare const READ_FROM_SESSION_STORAGE: (storageName: string) => any;

export { type CustomHttpParam, HTTP_HEADER_CONTENT_TYPE, HttpParentService, MIME_TYPE_TEXT_PLAIN, OBSERVE_BODY, OBSERVE_RESPONSE, READ_FROM_LOCAL_STORAGE, READ_FROM_SESSION_STORAGE, REQUEST_PARAM_LIMIT, REQUEST_PARAM_LOCALE, REQUEST_PARAM_MATCH_SCORE, REQUEST_PARAM_NEXT_CURSOR, REQUEST_PARAM_PAGE_NUMBER, REQUEST_PARAM_QUERY, REQUEST_PARAM_SIMILARITY, RESPONSE_TYPE_JSON, WRITE_TO_LOCAL_STORAGE, WRITE_TO_SESSION_STORAGE, addHttpParams, createHttpParams, debug, formControlSetValue };
