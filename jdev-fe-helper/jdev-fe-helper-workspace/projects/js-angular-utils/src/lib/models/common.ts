export interface RequestResponse<REQ, RES> {
  request: REQ;
  response: RES;
}

export interface WrapperArray<T> {
  wrapper: T[];
}

export interface WrapperObject<T> {
  wrapper: T;
}

export interface KeyValue<K, V> {
    key: K;
    value: V;
}