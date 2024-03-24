"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  name: string;
  path: string;
}
export const ActiveLink = ({ name, path }: ActiveLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={
        pathname == path ? "text-gray-900" : "text-gray-500 dark:text-gray-400"
      }
    >
      {name}
    </Link>
  );
};
