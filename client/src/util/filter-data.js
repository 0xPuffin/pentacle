function filterData(obj, val) {
  const children = obj.children || [];

  const nestedChildren = children.filter((d) =>
    d.name.toUpperCase().includes(val.toUpperCase())
  );

  const filtered = {
    name: obj.name,
    children: nestedChildren,
    filtered: !!nestedChildren.length
  };

  const res = filtered.children.length
    ? filtered
    : {
        ...obj,
        children: children.map((nestedObj) => filterData(nestedObj, val)),
      };

  return res;
}

export default filterData;
