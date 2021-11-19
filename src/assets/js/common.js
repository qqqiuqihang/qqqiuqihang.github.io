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

// 保存本地session
export function setSession(str, val) {
  sessionStorage.setItem(str, JSON.stringify(val));
}

// 获取本地session
export function getSession(str) {
  return JSON.parse(sessionStorage.getItem(str)) ?? "";
}

// 递归遍历1
export function recursiveTraversal(arr, target, newArr = []) {
  const index = arr.findIndex((item) => item.path === target[0]);
  newArr.push({ name: arr[index].name, path: arr[index].path });
  if (arr[index] && arr[index].children) {
    recursiveTraversal(arr[index].children, target.slice(1), newArr);
  }
  return newArr;
}
