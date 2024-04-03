"use client";
import { usePrunedBlockchain } from "@/hooks/blockchainHooks";
import TreeView from "../tree/TreeView";

export function PrunedBlockchain() {
  const { data, isLoading, isError } = usePrunedBlockchain();
  return (
    <div className="px-4 md:px-6 py-6 space-y-6 min-h-screen">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">
          Pruned Blockchain Explorer
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          view the pruned blockchain.
        </p>
      </div>
      <TreeView data={data} />
    </div>
  );
}
