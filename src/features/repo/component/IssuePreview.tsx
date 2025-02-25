import { cn } from "@/utils/cn";
import { GithubIssue } from "../connectivity/types.repo";

type RepoTeaserProps = { issue: GithubIssue; className?: string };

export const IssuePreview = ({ issue, className }: RepoTeaserProps) => {
  return (
    <article
      className={cn(
        "flex flex-col bg-gray-dark border border-transparent rounded-lg p-4 sm:p-8 w-full hover:bg-gray-600 min-h-40",
        className,
      )}
    >
      <h3 className="text-sunflare font-semibold text-lg">{issue.title}</h3>
      <p className="py-2">{issue.html_url}</p>
      <p className="py-2">{issue.id}</p>
    </article>
  );
};
