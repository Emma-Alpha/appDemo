
// 创建一个空数组来存储匹配的对象
let matchedObjects: any[] = [];

// 定义一个递归函数来遍历子路由对象
function traverseRoutes(routes) {
  for (let route of routes) {
    // 检查当前子路由对象是否具有"microApp"属性
    if (route.hasOwnProperty("microApp")) {
      // 如果有，将该子路由对象添加到结果数组中
      matchedObjects.push(route);
    }

    // 检查当前子路由对象是否还有更深层级的子路由
    if (route.hasOwnProperty("routes")) {
      // 递归调用自身来遍历更深层级的子路由对象
      traverseRoutes(route.routes);
    }
  }
}

export const getMicroApp = (a: any[]) => {
  matchedObjects = []
  // 遍历变量a中的每个对象
  for (let obj of a) {
    // 检查当前对象是否具有"microApp"属性
    if (obj.hasOwnProperty("microApp")) {
      // 如果有，将该对象添加到结果数组中
      matchedObjects.push(obj);
    }

    // 检查当前对象是否具有"routes"属性
    if (obj.hasOwnProperty("routes")) {
      // 调用递归函数来遍历子路由对象
      traverseRoutes(obj.routes);
    }
  }

  return matchedObjects
}
 

