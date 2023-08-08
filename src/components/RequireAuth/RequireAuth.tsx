import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalStore from "@store/global";
import { Spin } from "antd";
import _ from "lodash-es";

const RequireAuth = (Component: any, props?: { targetPerarr?: string, autoRedirect?: boolean }) => () => {
  let navigate = useNavigate();

  let targetPerarr: string | undefined = undefined
  let autoRedirect: boolean | undefined = undefined
  if (props) {
    targetPerarr = props.targetPerarr
    autoRedirect = props.autoRedirect
  }
  const [isFirst, setIsFirst] = useState<undefined | boolean>(undefined);

  const getBasicInfo = useGlobalStore(state => state.getBasicInfo)
  const navCode = useGlobalStore(state => state.navCode)
  const currentUser = useGlobalStore(state => state.currentUser)
  const modules = useGlobalStore(state => state.modules)

  useEffect(() => {
    getBasicInfo({}).then((res) => {
      setIsFirst(true)
    })
  }, [])


  const renderNavigateValue = useCallback(() => {
    if (_.isEmpty(navCode) && _.isEmpty(currentUser) && _.isEmpty(modules)) {
      navigate(`/auth`, { replace: true })
      return 
    }
    // 如果有配置权限位，则判断当前权限是否满足
    if (props?.targetPerarr) {
      const codeObj = navCode.find(c => props.targetPerarr === c)
      if (codeObj) {
        return <Component />
      } else {
        navigate(`/unAuth`, { replace: true })
        return 
      }
    }
    // 如果启动了自动跳转功能，则根据路由权限配置来生成
    if (props?.autoRedirect) {
      navCode.forEach(code => {
        const codeItem = modules.find(o => o.perarr === code)
        if (codeItem && codeItem.defaultroute) {
          navigate(`/${codeItem.path}${codeItem.defaultroute}`, { replace: true })
          return
        }
        if (codeItem && codeItem.path) {
          navigate(`/${codeItem.path}`, { replace: true })
          return
        }
      })
    }
    return <Component />
  }, [navCode, currentUser, modules])

  const renderElement = () => {
    if (isFirst === undefined) {
      return <Spin spinning={true}>加载中...</Spin>
    }
    if (isFirst) {
      return renderNavigateValue()
    }
  }

  return renderElement()
}

export default RequireAuth;