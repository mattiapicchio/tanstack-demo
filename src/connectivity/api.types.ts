export interface ErrorResponse {
  message: string;
  documentation_url?: string;
  status?: number;
  errors?: Array<{
    resource?: string;
    field?: string;
    code?: string;
    message?: string;
  }>;
}
