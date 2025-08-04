export const WRITE_TO_LOCAL_STORAGE = (storageName: string, obj: any) => {
    writeToStorage(storageName, obj, true);
}

export const WRITE_TO_SESSION_STORAGE = (storageName: string, obj: any) => {
    writeToStorage(storageName, obj, false);
}

export const READ_FROM_LOCAL_STORAGE = (storageName: string): any => {
    return readFromStorage(storageName, true);
}

export const READ_FROM_SESSION_STORAGE = (storageName: string): any => {
    return readFromStorage(storageName, false);
}

//---private
const readFromStorage = (storageName: string, isLocalStorage: boolean): any => {
    if (typeof window === 'undefined') {
        throw Error('Cannot find window!');
    } else {
        if (isLocalStorage) {
            return window.localStorage.getItem(storageName);
        }
        return window.sessionStorage.getItem(storageName);
    }
}

const writeToStorage = (storageName: string, obj: any, isLocalStorage: boolean) => {
    if (typeof window === 'undefined') {
        throw Error('Cannot find window!');
    } else {
        if (isLocalStorage) {
            window.localStorage.setItem(storageName, JSON.stringify(obj));
        } else {
            window.sessionStorage.setItem(storageName, JSON.stringify(obj));
        }
    }
}