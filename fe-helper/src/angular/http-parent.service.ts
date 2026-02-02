import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export abstract class HttpParentService {

    protected readonly http = inject(HttpClient);

    constructor() { }
}