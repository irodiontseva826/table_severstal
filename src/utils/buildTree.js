export function buildTree(data) {
  const map = new Map();
  const roots = [];

  data.forEach((item) => map.set(item.id, { ...item, children: [] }));

  map.forEach((item) => {
    if (item.parentId === 0) {
      roots.push(item);
    } else {
      const parent = map.get(item.parentId);
      if (parent) {
        parent.children.push(item);
      }
    }
  });

  return roots;
}
