import React, { useEffect } from 'react'
import { useNavigate, Outlet, useLocation } from "react-router-dom";

function index() {

  const navigate = useNavigate()
  const routeLocation = useLocation();

  useEffect(() => {
    navigate("category", { replace: true })
  }, [routeLocation.pathname])

  return <Outlet />
}

export default index