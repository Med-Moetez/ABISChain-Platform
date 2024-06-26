import { UserButton, auth } from "@clerk/nextjs";
import { Package2Icon } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "../ui/activeLink";

export default async function Header() {
  const { userId } = auth();

  return (
    <div className="flex  justify-between h-14 gap-4 border-b px-4 md:h-16 lg:gap-6 dark:border-gray-700 shrink-0">
      <Link
        className="flex items-center gap-2 text-lg font-semibold md:gap-3"
        href={userId ? "/dashboard" : "/"}
      >
        <Package2Icon className="w-4 h-4" />
        <span className="">ABISChain</span>
      </Link>
      <div className="flex items-center gap-2 font-semibold md:gap-3">
        {userId ? (
          <div className="flex gap-4 items-center">
            <ActiveLink name="Dashboard" path="/dashboard" />
            <ActiveLink name="Products" path="/products" />
            <ActiveLink name="Block Explorer" path="/blockExplorer" />
            <ActiveLink name="Blockchain" path="/blockchain" />
            <ActiveLink name="Pruned Blockchain" path="/prunedBlockchain" />

            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link href="/sign-up">Sign up</Link>
            <Link href="/sign-in">Sign In</Link>
          </div>
        )}
      </div>
    </div>
  );
}
