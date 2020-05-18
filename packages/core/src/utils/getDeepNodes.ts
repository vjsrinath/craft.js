import { NodeId, Nodes } from "../interfaces";

export const getDeepNodes = (
  nodes: Nodes,
  id: NodeId,
  deep: boolean = true
) => {
  function recursive(id: NodeId, result: NodeId[] = [], depth: number = 0) {
    const node = nodes[id];
    if (deep || (!deep && depth === 0)) {
      if (node.data.linkedNodes) {
        Object.keys(node.data.linkedNodes).forEach((canvasName) => {
          const virtualId = node.data.linkedNodes![canvasName];
          result.push(virtualId);
          result = recursive(virtualId, result, depth + 1);
        });
      } else if (node.data.nodes) {
        const childNodes = node.data.nodes; // ['t1c1', 't1c2']
        childNodes.forEach((nodeId) => {
          result.push(nodeId);
          result = recursive(nodeId, result, depth + 1);
        });
      }
    }
    return result;
  }

  return recursive(id);
};
