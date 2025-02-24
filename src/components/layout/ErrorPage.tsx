import { ErrorResponse } from "@/connectivity/api.types";
import { MeteorIcon } from "../icons/MeteorIcon";

type ErrorPageProps = {
  error: ErrorResponse;
};

export const ErrorPage = ({ error }: ErrorPageProps) => {
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col items-center justify-center space-y-4">
        <MeteorIcon className="text-orange w-16 h-16" />
        {error.status && (
          <div className="text-orange font-bold text-3xl">{error.status}!</div>
        )}
        <p className="font-bold text-2xl">{error.message}</p>
        {error.documentation_url && (
          <div className="flex flex-col sm:flex-row items-center">
            <span className="sm:mr-2">read more at </span>
            <a href={error.documentation_url} target="_blank">
              <span>{error.documentation_url}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
