export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: string | null;
}

export interface PaginatedData<T> {
  data: T[];
  total: number;
}

export type ServiceResponse<T> = ApiResponse<PaginatedData<T>>;
