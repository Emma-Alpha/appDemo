import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import useStore from '@models/global';

/**
 * 用于请求profile接口，获取当前的用户信息
 * @returns 
 */
function Profile() {

  const { profileFetch, profileLoading, profileData } = useStore()

  useEffect(() => {
    if (!profileData) profileFetch()
  }, [profileData])

  if(!profileData) return null
  return (
    <Outlet />
  )
}

export default Profile