import { StarIcon } from "@/components/icons/StarIcon";
import { cn } from "@/utils/cn";
import { GithubRepo } from "../connectivity/types.repo";

type RepoTeaserProps = { repo: GithubRepo; className?: string };

export const RepoTeaser = ({ repo, className }: RepoTeaserProps) => {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      className="sm:ml-3 no-underline hover:text-inherit text-inherit"
    >
      <article
        className={cn(
          "flex flex-col bg-gray-dark border border-transparent rounded-lg p-4 sm:p-8 w-full hover:bg-gray-600",
          className,
        )}
      >
        <div className="flex justify-between">
          <h3 className="text-sunflare font-semibold text-lg">{repo.name}</h3>
          <div className="flex items-center">
            <StarIcon className="mr-3 text-sunflare" />
            <span>{repo.stargazers_count}</span>
          </div>
        </div>
        <p className="py-2">{repo?.description}</p>
      </article>
    </a>
  );
};
