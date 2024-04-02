import TreeNode from "./TreeNode";

interface TreeViewProps {
  data: any; // Define a proper type for your tree data
}

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <div>
      <TreeNode node={data} />
    </div>
  );
};

export default TreeView;
