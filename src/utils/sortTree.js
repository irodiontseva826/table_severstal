export function sortTree(items, sortBy, sortOrder) {
  if (!sortBy) return items;

  const compare = (a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];

    if (sortBy === "balance") {
      aValue = parseFloat(aValue?.replace(/[$,]/g, "") || 0);
      bValue = parseFloat(bValue?.replace(/[$,]/g, "") || 0);
    }

    if (sortBy === "email") {
      aValue = aValue?.toLowerCase() || "";
      bValue = bValue?.toLowerCase() || "";
    }

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;

    return 0;
  };

  const sortRecursive = (item) => {
    const sortedChildren = item.children
      ? [...item.children].sort(compare).map(sortRecursive)
      : [];

    return {
      ...item,
      children: sortedChildren,
    };
  };

  return [...items].sort(compare).map(sortRecursive);
}
