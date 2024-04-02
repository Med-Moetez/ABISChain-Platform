import React, { useState } from "react";

interface BlockHeader {
  version: number;
  previousBlockHeader: string | null;
  hash: string;
  rootHash: string;
  createdAt: number;
  miner: {
    id: string;
    type: string;
  };
  dataValue: {
    healthValue: number;
    financeValue: number;
    itValue: number;
  };
}

interface Transaction {
  id: string;
  name: string;
  quantity: string;
  price: string;
  status: string;
}

interface Block {
  blockHeader: BlockHeader;
  index: number;
  pruned: boolean;
  txns: Transaction[] | null;
}

interface TreeNodeProps {
  node: Block[];
}

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
  const [expandedBlocks, setExpandedBlocks] = useState<number[]>([]);

  const toggleBlock = (index: number) => {
    if (expandedBlocks.includes(index)) {
      setExpandedBlocks(
        expandedBlocks.filter((blockIndex) => blockIndex !== index)
      );
    } else {
      setExpandedBlocks([...expandedBlocks, index]);
    }
  };

  return (
    <ul>
      {node?.map((block, index) => (
        <li key={index}>
          <div style={{ cursor: "pointer" }} onClick={() => toggleBlock(index)}>
            <strong>
              Block {block.index}{" "}
              {expandedBlocks.includes(index) ? "[-]" : "[+]"}
            </strong>
          </div>
          {expandedBlocks.includes(index) && (
            <ul>
              <li>Version: {block.blockHeader.version}</li>
              <li>Hash: {block.blockHeader.hash}</li>
              <li>Root Hash: {block.blockHeader.rootHash}</li>
              <li>Created At: {block.blockHeader.createdAt}</li>
              <li>Miner ID: {block.blockHeader.miner.id}</li>
              <li>Miner Type: {block.blockHeader.miner.type}</li>
              <li>
                Data Values:
                <ul>
                  <li>Health: {block.blockHeader.dataValue.healthValue}</li>
                  <li>Finance: {block.blockHeader.dataValue.financeValue}</li>
                  <li>IT: {block.blockHeader.dataValue.itValue}</li>
                </ul>
              </li>
              <li>
                Transactions:
                <ul>
                  {block.txns !== null &&
                    block.txns.map((txn, idx) => (
                      <li key={idx}>
                        <strong>Transaction {idx + 1}:</strong>
                        <ul>
                          <li>ID: {txn.id}</li>
                          <li>Name: {txn.name}</li>
                          <li>Quantity: {txn.quantity}</li>
                          <li>Price: {txn.price}</li>
                          <li>Status: {txn.status}</li>
                        </ul>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TreeNode;
