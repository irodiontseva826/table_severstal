export function filterTree(items, status) {
  if (status === "all") return items.map(item => ({ ...item, matchesFilter: true }));

  const filterRecursive = (item) => {
    const itemMatches = status === "active" ? item.isActive : !item.isActive;

    const filteredChildren = item.children
      ? item.children.map(filterRecursive).filter(Boolean)
      : [];

    if (itemMatches || filteredChildren.length > 0) {
      return {
        ...item,
        children: filteredChildren,
        matchesFilter: itemMatches,
      };
    }

    return null;
  };

  return items.map(filterRecursive).filter(Boolean);
}
