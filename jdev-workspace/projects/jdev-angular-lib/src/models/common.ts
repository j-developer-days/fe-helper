export interface CommonResposeDataWithPaginationInfo {
  nextCursor: string | null;
  similarity: number;
  matchScore: number;
}

export interface CommonResposeDataWithPagination<T> extends CommonResposeDataWithPaginationInfo {
  hasMore: boolean;
  items: T[];
}

export interface RR {
  request: string;
  response: CommonResposeDataWithPagination<any> | null | undefined;
}

export interface SelectedValue {
  additionalInfo: CommonResposeDataWithPaginationInfo;
  selectedValue: string | null;
  searchValueInInput: string | null;
  isGetNextPage: boolean;
  isAddForm: boolean;
}