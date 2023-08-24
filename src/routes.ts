// 应用路由
export const routes = [
  {
    key: "auth",
    path: "/auth",
    component: "auth/layout.tsx",
    routes: [
      {
        path: "/auth",
        component: "auth/page.tsx"
      },
    ]
  },
  {
    key: "/",
    component: "layout.tsx",
    routes: [
      {
        path: "/",
        component: "page.tsx"
      },
      {
        path: "unAuth",
        component: "unAuth/page.tsx",
      },
      {
        path: "text/:slug/setting",
        component: "users/Login",
      },
      {
        path: "*",
        component: "EmptyRoute"
      },
    ]
  }
]