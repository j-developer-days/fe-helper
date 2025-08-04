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
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
var HttpParentService = class {
  http = inject(HttpClient);
  constructor() {
  }
};
export {
  HttpParentService,
  READ_FROM_LOCAL_STORAGE,
  READ_FROM_SESSION_STORAGE,
  WRITE_TO_LOCAL_STORAGE,
  WRITE_TO_SESSION_STORAGE,
  debug
};
