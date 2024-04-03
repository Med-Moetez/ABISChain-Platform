import { useQuery } from "react-query";
import blockchainService from "@/services/blockchain";
import React from "react";

const useBlockById = (id: any) => {
  const query = useQuery(["block"], () => blockchainService.getBlockById(id));

  React.useEffect(() => {
    query.refetch();
  }, [id]);

  return query;
};

const useBlockchain = () => {
  return useQuery(["blockchain"], () => blockchainService.getBlockchain());
};

const usePrunedBlockchain = () => {
  return useQuery(["prunedBlockchain"], () =>
    blockchainService.getPrunedBlockchain()
  );
};

const useBlockchainStats = () => {
  return useQuery(["blockchainStats"], () =>
    blockchainService.getBlockchainStats()
  );
};

export { useBlockchain, usePrunedBlockchain, useBlockById, useBlockchainStats };
