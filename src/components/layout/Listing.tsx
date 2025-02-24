import { cn } from "@/utils/cn";
import React from "react";

interface ListingProps<TItem, TProp extends string> {
  list: TItem[];
  keyProp: keyof TItem;
  ListItemComponent: React.ComponentType<Record<TProp, TItem>>;
  listItemProp: TProp;
  className?: string;
}

export function Listing<TItem, TProp extends string>({
  className,
  list,
  keyProp,
  ListItemComponent,
  listItemProp,
}: ListingProps<TItem, TProp>) {
  if (!list?.length) return null;

  return (
    <ul className={cn("flex flex-col p-2", className)}>
      {list.map((item, index) => (
        <li key={(item[keyProp] as React.Key) || index} className="p-2">
          <ListItemComponent
            {...({ [listItemProp]: item } as Record<TProp, TItem>)}
          />
        </li>
      ))}
    </ul>
  );
}
