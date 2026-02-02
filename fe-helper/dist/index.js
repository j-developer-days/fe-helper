"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  HTTP_HEADER_CONTENT_TYPE: () => HTTP_HEADER_CONTENT_TYPE,
  HttpParentService: () => HttpParentService,
  MIME_TYPE_TEXT_PLAIN: () => MIME_TYPE_TEXT_PLAIN,
  OBSERVE_BODY: () => OBSERVE_BODY,
  OBSERVE_RESPONSE: () => OBSERVE_RESPONSE,
  READ_FROM_LOCAL_STORAGE: () => READ_FROM_LOCAL_STORAGE,
  READ_FROM_SESSION_STORAGE: () => READ_FROM_SESSION_STORAGE,
  REQUEST_PARAM_LIMIT: () => REQUEST_PARAM_LIMIT,
  REQUEST_PARAM_LOCALE: () => REQUEST_PARAM_LOCALE,
  REQUEST_PARAM_MATCH_SCORE: () => REQUEST_PARAM_MATCH_SCORE,
  REQUEST_PARAM_NEXT_CURSOR: () => REQUEST_PARAM_NEXT_CURSOR,
  REQUEST_PARAM_PAGE_NUMBER: () => REQUEST_PARAM_PAGE_NUMBER,
  REQUEST_PARAM_QUERY: () => REQUEST_PARAM_QUERY,
  REQUEST_PARAM_SIMILARITY: () => REQUEST_PARAM_SIMILARITY,
  RESPONSE_TYPE_JSON: () => RESPONSE_TYPE_JSON,
  WRITE_TO_LOCAL_STORAGE: () => WRITE_TO_LOCAL_STORAGE,
  WRITE_TO_SESSION_STORAGE: () => WRITE_TO_SESSION_STORAGE,
  addHttpParams: () => addHttpParams,
  createHttpParams: () => createHttpParams,
  debug: () => debug,
  formControlSetValue: () => formControlSetValue
});
module.exports = __toCommonJS(index_exports);

// src/angular/http-parent.service.ts
var import_http = require("@angular/common/http");
var import_core = require("@angular/core");
var HttpParentService = class {
  http = (0, import_core.inject)(import_http.HttpClient);
  constructor() {
  }
};

// src/angular/angular-helpers.ts
function formControlSetValue(formControl, value) {
  formControl.setValue(value);
}

// src/js/common-constants.ts
var REQUEST_PARAM_PAGE_NUMBER = "pageNumber";
var REQUEST_PARAM_QUERY = "query";
var REQUEST_PARAM_LIMIT = "limit";
var REQUEST_PARAM_NEXT_CURSOR = "nextCursor";
var REQUEST_PARAM_SIMILARITY = "similarity";
var REQUEST_PARAM_MATCH_SCORE = "matchScore";
var REQUEST_PARAM_LOCALE = "locale";
var RESPONSE_TYPE_JSON = "json";
var OBSERVE_RESPONSE = "response";
var OBSERVE_BODY = "body";
var HTTP_HEADER_CONTENT_TYPE = "content-type";
var MIME_TYPE_TEXT_PLAIN = "text/plain";

// src/js/common-helpers.ts
var debug = (message, ...optionalParams) => {
  console.log(message, ...optionalParams);
};

// src/js/http-helpers.ts
var import_http2 = require("@angular/common/http");
function createHttpParams(customHttpParams) {
  return addParamsToHttpParamsProcess(new import_http2.HttpParams(), customHttpParams);
}
function addHttpParams(hp, customHttpParams) {
  if (customHttpParams.needToCheckValue) {
    if (customHttpParams.value === null || customHttpParams.value === void 0) {
      return hp;
    } else {
      return hp.append(customHttpParams.key, customHttpParams.value);
    }
  } else {
    return hp.append(customHttpParams.key, customHttpParams.value);
  }
}
function addParamsToHttpParamsProcess(hp, customHttpParams) {
  customHttpParams.forEach((currentCustomHttpParam) => {
    hp = addHttpParams(hp, currentCustomHttpParam);
  });
  return hp;
}

// src/js/storage-helpers.ts
var WRITE_TO_LOCAL_STORAGE = (storageName, obj) => {
  writeToStorage(storageName, obj, true);
};
var WRITE_TO_SESSION_STORAGE = (storageName, obj) => {
  writeToStorage(storageName, obj, false);
};
var READ_FROM_LOCAL_STORAGE = (storageName) => {
  return readFromStorage(storageName, true);
};
var READ_FROM_SESSION_STORAGE = (storageName) => {
  return readFromStorage(storageName, false);
};
var readFromStorage = (storageName, isLocalStorage) => {
  if (typeof window === "undefined") {
    throw Error("Cannot find window!");
  } else {
    if (isLocalStorage) {
      return window.localStorage.getItem(storageName);
    }
    return window.sessionStorage.getItem(storageName);
  }
};
var writeToStorage = (storageName, obj, isLocalStorage) => {
  if (typeof window === "undefined") {
    throw Error("Cannot find window!");
  } else {
    if (isLocalStorage) {
      window.localStorage.setItem(storageName, JSON.stringify(obj));
    } else {
      window.sessionStorage.setItem(storageName, JSON.stringify(obj));
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HTTP_HEADER_CONTENT_TYPE,
  HttpParentService,
  MIME_TYPE_TEXT_PLAIN,
  OBSERVE_BODY,
  OBSERVE_RESPONSE,
  READ_FROM_LOCAL_STORAGE,
  READ_FROM_SESSION_STORAGE,
  REQUEST_PARAM_LIMIT,
  REQUEST_PARAM_LOCALE,
  REQUEST_PARAM_MATCH_SCORE,
  REQUEST_PARAM_NEXT_CURSOR,
  REQUEST_PARAM_PAGE_NUMBER,
  REQUEST_PARAM_QUERY,
  REQUEST_PARAM_SIMILARITY,
  RESPONSE_TYPE_JSON,
  WRITE_TO_LOCAL_STORAGE,
  WRITE_TO_SESSION_STORAGE,
  addHttpParams,
  createHttpParams,
  debug,
  formControlSetValue
});
