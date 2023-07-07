import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import useStore from '@models/global';

/**
 * 用于请求profile接口，获取当前的用户信息
 * @returns 
 */
function Perarr() {

  const { perarrFetch, perarrLoading, perarrData } = useStore()

  useEffect(() => {
    if (!perarrData) perarrFetch()
  }, [perarrData])

  if(!perarrData) return null
  return (
    <Outlet />
  )
}

export default Perarr