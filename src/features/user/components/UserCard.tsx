import { cn } from "@/utils/cn";
import { User } from "../connectivity/types.user";

type UserCardProps = { user: User; className?: string };

export const UserCard = ({ user, className }: UserCardProps) => {
  return (
    <article
      className={cn(
        "bg-gray-dark border border-transparent rounded-lg p-4 sm:p-8 w-fit justify-self-center",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-center w-fit">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="aspect-square flex-grow-0 sm:max-w-[50%]"
        />
        <ol className="sm:px-6 [&>li]:py-2 [&>li]:flex [&>li]:flex-col [&>li]:items-baseline mt-6 sm:mt-0 w-fit">
          <li>
            <h4 className="text-lg font-bold">Name:</h4>
            <span className="sm:ml-3 text-sunflare">{user.name}</span>
          </li>
          <li>
            <h4 className="text-lg font-bold">Company:</h4>
            <span className="sm:ml-3 text-sunflare">{user.company}</span>
          </li>
          <li>
            <h4 className="text-lg font-bold">Public Repos:</h4>
            <span className="sm:ml-3 text-sunflare">{user.public_repos}</span>
          </li>
          <li>
            <h4 className="text-lg font-bold">Followers:</h4>
            <span className="sm:ml-3 text-sunflare">{user.followers}</span>
          </li>
          <li>
            <h4 className="text-lg font-bold">Account:</h4>
            <a href={user.html_url} target="_blank" className="sm:ml-3">
              <span>{user.html_url}</span>
            </a>
          </li>
        </ol>
      </div>
    </article>
  );
};
