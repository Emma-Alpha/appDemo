import React from "react";


export default function(auth) {
  // TODO list
  return {
    publicRouteFilter: () => true,
    adminRouteFilter: () => auth.user.role !== 'admin',
    perarrRouteFilter: (route) => auth && auth.navCode.includes(route.perarr)
  }
}