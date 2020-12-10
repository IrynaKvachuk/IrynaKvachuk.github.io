export const updateObjectInArray = (
  items,
  searchItemId,
  objPropName,
  newObjProps
) => {
  return items.map((item) => {
    if (item[objPropName] === searchItemId) {
      return { ...item, ...newObjProps };
    }
    return item;
  });
};
