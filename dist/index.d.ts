import { HttpClient } from '@angular/common/http';

declare const debug: (message?: any, ...optionalParams: any[]) => void;

declare const WRITE_TO_LOCAL_STORAGE: (storageName: string, obj: any) => void;
declare const WRITE_TO_SESSION_STORAGE: (storageName: string, obj: any) => void;
declare const READ_FROM_LOCAL_STORAGE: (storageName: string) => any;
declare const READ_FROM_SESSION_STORAGE: (storageName: string) => any;

declare abstract class HttpParentService {
    protected readonly http: HttpClient;
    constructor();
}

export { HttpParentService, READ_FROM_LOCAL_STORAGE, READ_FROM_SESSION_STORAGE, WRITE_TO_LOCAL_STORAGE, WRITE_TO_SESSION_STORAGE, debug };
