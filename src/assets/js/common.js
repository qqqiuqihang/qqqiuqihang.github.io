// 循环遍历
export function recursiveTraversalResver(
  arr,
  target,
  currentLevel = 0,
  newArr = []
) {
  currentLevel++;
  arr.some((item) => {
    if (item && item.children) {
      newArr[currentLevel - 1] = { ...item };
      delete newArr[currentLevel - 1].children;
      let result = recursiveTraversalResver(
        item.children,
        target,
        currentLevel - 1,
        newArr
      );
      if (result.length !== currentLevel) return true;
    } else {
      if (item.path === target) {
        newArr.push({ ...item });
        return true;
      } else {
        return false;
      }
    }
  });
  return newArr;
}
