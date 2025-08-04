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
  HttpParentService: () => HttpParentService,
  READ_FROM_LOCAL_STORAGE: () => READ_FROM_LOCAL_STORAGE,
  READ_FROM_SESSION_STORAGE: () => READ_FROM_SESSION_STORAGE,
  WRITE_TO_LOCAL_STORAGE: () => WRITE_TO_LOCAL_STORAGE,
  WRITE_TO_SESSION_STORAGE: () => WRITE_TO_SESSION_STORAGE,
  debug: () => debug
});
module.exports = __toCommonJS(index_exports);

// src/js/common-helper.ts
var debug = (message, ...optionalParams) => {
  console.log(message, ...optionalParams);
};

// src/js/storage-helper.ts
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

// src/angular/http-parent.service.ts
var import_http = require("@angular/common/http");
var import_core = require("@angular/core");
var HttpParentService = class {
  http = (0, import_core.inject)(import_http.HttpClient);
  constructor() {
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HttpParentService,
  READ_FROM_LOCAL_STORAGE,
  READ_FROM_SESSION_STORAGE,
  WRITE_TO_LOCAL_STORAGE,
  WRITE_TO_SESSION_STORAGE,
  debug
});
