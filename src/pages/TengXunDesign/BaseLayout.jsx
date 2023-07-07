import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Config from "@src/Config";
import _ from "lodash-es";
import { getConfigRoutes } from "@src/router/routesConfig.ts";

function BaseLayout() {

  const { routes } = Config
  const routeLocation = useLocation()
  const navigate = useNavigate()

  // 发送路由配置给main
  useEffect(() => {
    let routerIds = []

    // 先查找拥有ID变量的
    function findIdRouteConfig(routes) {
      if (!routes) return
      if (routes && Array.isArray(routes) && routes.length > 0) {
        routes.map(route => {
          if (route.id) {
            routerIds.push(route)
            return true
          }
          if (route.routes) {
            findIdRouteConfig(route.routes)
            if (route.id) {
              routerIds.push(route)
            }
          }
        })
      }
    }
    findIdRouteConfig(routes)

    function getRoutes(routes) {
      let obj = {}
      if (routes && Array.isArray(routes) && routes.length > 0) {
        return routes.map(route => {
          obj = _.omit({ ...route }, ["routes", "component", "key"])
          if (route.routes && route.id) {
            obj.children = getRoutes(route.routes)
          }
          return obj
        })
      }
    }
    let moduleRouteConfig = getRoutes(routerIds)

    if (window.Garfish) {
      window?.Garfish.channel.emit("router", {
        name: "manage",
        routes: moduleRouteConfig,
      })
    }
  }, [])

  useEffect(() => {
    console.log(routeLocation.pathname)
    if (routeLocation.pathname === "/") {
      // 查找router中是否存在 default 的配置，如果存在，则走default 配置的
      const routeObj = getConfigRoutes(Config)
      Object.keys(routeObj).forEach(key => {
        let v  =routeObj[key]
        if(v?.default) {
          navigate(v?.absPath ?? "")
          return 
        }
      })
    }
  }, [routeLocation.pathname])

  return (
    <Outlet />
  )
}

export default BaseLayout