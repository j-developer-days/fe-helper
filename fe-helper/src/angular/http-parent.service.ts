import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export abstract class HttpParentService {

    protected readonly http = inject(HttpClient);

    constructor() { }
}