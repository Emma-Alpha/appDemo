### 前言

现在逛网站，其实越来越熟悉连续不间断的操作体验，也越来越没耐心，如果按了按钮还会跳白色画面等个几秒钟，即便只是闪一下，都会默默在心里XX

而 React Router 作为一个SPA框架下的重要工具，扮演举足轻重的角色，也是透过它，我们才能做出很棒的UX，也能更好切割前端的各个组件。



### React Route 是在什么样的时代诞生的？

在 MPA（Mulit-Page-Application）为主的时代，一个应用程序利用多个html档案来呈现，每点击一个页面就会让整个网页重新载入，连同其他的JavaScript 及 CSS 档案。

而 SPA（Single Page Application）则是整个应用程序只有一个 index.html，如果需要切换页面内容，就用 AJAX 方法来处理，在使用者发送请求等到有返回值，仅针对需要变动的元素进行更新。

MPA会透过切换网址来切换内容，比如：

* `/home` 会切换到 [首页] \(home.index)
* `/about`会切换到[关于我们]\(about.index)

* `/contact`会切换到[联系我们]\(contact.index)

那SPA呢？想要切换网址来切换内容，但我从头到尾都只有一个HTML，该怎么办呢？



### React Router 怎么解决问题？

> React Router enables "client side routing".

没错就是这么单纯，React Router其实就是一件事 - [前端路由]。

在SPA的网址更动时，为了不要整个页面重新载入，需要透过路由来侦测导流，仅针对程序中的局部重新载入。

 而React本身只是一个应用框架，不支持这样弄。因此需要能处理router的插件或者模块，React Router 闪亮登场！

流程步骤大概是这样的：

1. 在 React-Router 注册，A网址对应B组件，C网址对应D组件等
2. 使用者或程序切换到网址C
3. 浏览器将 [网址变动] 事件通知 history物件
4. History 物件在通知React-router 网址变成 C 了
5. React-Router 找到对应的D组件，丢给React开始render

其中最关键的是 【发生变动时要通知】这个机制，也就是observer pattern，必须要有这个机制，才能够让 React-Router 即时收到变化，也找出对应的组件。



### React Router 的优缺点是什么？

**优点**

* Render 都在前端发生，降低后端的负担
* 切换页面不会整个白屏，使用者体验较佳
* 前后端相依性降低，后端可以专注于API的设计

缺点

由于是SPA架构，开头只有空白的页面，内容都要靠后端回来，SEO较弱



综合以上所述，我们将采用react-router-dom。而且是v6版本。



### 安装React-Router

```shell
pnpm i react-router-dom
```



### 快速入门

index.tsx

```tsx
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

看起来非常简洁明了。



### 嵌套路由

嵌套路由是将URL耦合到组件层次结构和数据的总体思想。

具体应用到

* 页面不同路由需不同的页面布局
* 数据依赖性的问题

```tsx
createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: ({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          }),
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
            loader: redirectIfUser,
          },
          {
            path: "logout",
            action: logoutUser,
          },
        ],
      },
    ],
  },
]);
```

根据上面的代码可以分析出，当URL为`login`时会使用AuthLayout页面布局组件，而URL为`dashboard`时则不会使用AuthLayout页面布局组件。



### 动态字段

URL的片段可以是动态占位符，它们被解析并提供各种api。

```tsx
<Route path="projects/:projectId/tasks/:taskId" />
```

由于:projectId 和 :taskId 是动态的，可以通过某些api 来获取

```tsx
function Task() {
  // returned from `useParams`
  const params = useParams();
  params.projectId; // abc
  params.taskId; // 3 
}

function Random() {
  const match = useMatch(
  	"/projects/:projectId/tasks/:taskId"
  );
  match.params.projectId; // abc
  match.params.taskId; // 3
}
```



### 浏览器路由器

由于项目是基于浏览器来实现，而且微服务中也对路由器组件有限制。因此采用`BrowserRouter`

BrowserRouter 是使用干净的URL 将当前位置存储在浏览器的地址栏中，并使用浏览器的内置历史记录堆栈进行导航。

```tsx
import * as React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
  	...
  </BrowserRouter>
)
```

| key      | 说明                                  |
| -------- | ------------------------------------- |
| basename | 指定URL以某个特定名称运行             |
| future   | 启动未来标志                          |
| window   | 默认是当前文档的defaultView，可以传递 |



### Route

路由是 React Router 应用程序中最重要的部分。它们将URL和组件、数据加载和数据行为耦合起来。通过路由嵌套，复杂的应用程序布局和数据依赖关系变得简单且具有声明性。

```jsx
<Route
      element={<Team />}
      path="teams/:teamId"
      loader={async ({ params }) => {
        return fetch(
          `/fake/api/teams/${params.teamId}.json`
        );
      }}
      action={async ({ request }) => {
        return updateFakeTeam(await request.formData());
      }}
      errorElement={<ErrorBoundary />}
    />
```

#### path

URL匹配的路径模式，用来确定此路由是否与URL、链接href 或者 表单操作匹配



#### 动态片段

动态片段目前支持：

* ✅ `/teams/:teamId`
* ✅`/:productSlug`

不支持：

* 🚫`/teams-:teamId`
* 🚫`/:category--:productId`



#### 布局路由

不填写path，默认为布局路由。它参与UI嵌套，但不会向URL添加任何属性。

```tsx
<Route
  element={
    <div>
      <h1>Layout</h1>
      <Outlet />
    </div>
  }
>
  <Route path="/" element={<h2>Home</h2>} />
  <Route path="/about" element={<h2>About</h2>} />
</Route>
```



#### index

通过该标识确定为索引路由。索引路由在其父级URL呈现到父级Outlet（类似于子路由的默认路由）。

```tsx
<Route path="/teams" element={<Teams />}>
  <Route index element={<TeamsIndex />} />
  <Route path=":teamId" element={<Team />} />
</Route>
```



#### caseSensitive

指示路由是否匹配大小写：

```tsx
<Route caseSensitive path="/wEll-aCtuA11y" />
```

* 会匹配 `wEll-aCtuAlly`
* 不会匹配 ` well-actua11y` 





#### element / Component

当路由 与 URL 匹配时要渲染的 React 元素/组件。

如果想创建 React 元素，需要使用`element:

```jsx
<Route path="/for-sale" element={<Properties />} />
```

否则，使用`Component` React Router 创建React元素：

```tsx
<Route path="/for-sale" Component={Properties} />
```



#### 其他属性

更多的属性以及API问题可以查看[官网介绍](https://reactrouter.com/en/main/route/route)



### Hooks

#### useNavigate

该钩子返回一个函数，允许您以变成方式导航，例如在效果中：

```tsx
import { useNavigate } from "react-router-dom";

function useLogoutTimer() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/session-timed-out');
  }, [])
}
```

##### to	

类似于Link的to 指向于 那个URL



##### options.replace

指定`replace: true` 将导致导航替换历史堆栈中的当前条目，而不是添加新条目。



##### options.state

可以包含一个可选的状态值存在到历史状态中。



##### options.preventScrollReset

搭配`<ScrollRestoration>`组件时，可以通过以下方式禁用将滚动重置到页面顶部`options.preventScrollReset`



##### options.relative

默认情况下，导航是相对于路由层次结构(`relative:"route"`)的，因此`..`会上升一级`Route`。有时，可能会发现匹配的URL模式对于嵌套没有意义，并且更愿意使用相对路由。可以通过以下方式选择此行为`relative:"path"`



#### useParams

该`useParams`钩子返回当前URL 中与`<Route path>`子路由继承父路由的所有参数。

```tsx
import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage() {
  // Get the userId param from the URL.
  let { userId } = useParams();
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />
        <Route path="me" element={...} />
      </Route>
    </Routes>
  );
}
```



#### useLocation

该钩子返回当前的`location`对象。如果想在当前位置更改时执行一些副作用

```tsx
import * as React from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();
  
  React.useEffect(() => {
    // do some thing
  }, [location])
  
  return (
  	// ...
  )
}
```



#### useRoutes

该钩子功能相当于`Routes`，但使用JavaScript对象而不是 `<Route>`元素来定义路由。useRoutes的返回值是可用于渲染路由树的有效React元素。

```tsx
import * as React from "react";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "messages",
          element: <DashboardMessages />,
        },
        { path: "tasks", element: <DashboardTasks /> },
      ],
    },
    { path: "team", element: <AboutPage /> },
  ]);

  return element;
}
```

### 总结

更多的Hooks 和组件需要到官网进行系统的学习以及了解。官网地址：https://reactrouter.com/en/main/hooks/use-routes



