export interface ErrorResponse {
  message: string;
  documentation_url?: string;
  errors?: Array<{
    resource?: string;
    field?: string;
    code?: string;
    message?: string;
  }>;
}
