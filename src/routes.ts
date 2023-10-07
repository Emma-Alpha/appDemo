import { RoutesTree } from '@store/types';

// 应用路由
export const routes: RoutesTree[] = [
  {
    path: "/auth",
    component: "auth/layout.tsx",
    routes: [
      {
        path: "/auth",
        component: "auth/page.tsx",
        props: {
          perarr: "01"
        }
      },
    ]
  },
  {
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