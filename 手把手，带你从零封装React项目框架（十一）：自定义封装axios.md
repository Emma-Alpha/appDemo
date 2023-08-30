### 前言

任何前端项目都离不开接口请求，而在前端项目中，axios 是目前流行的网络请求，本文就会对 axios 进行二次封装，以便于使用。

### 为什么

#### 为什么用 axios

因为它功能很多，而且使用起来比较方便。

- Axios 是一个基于 promise 的网络请求库，支持 Promise API。
- 在服务端使用 http 请求，而在浏览器则使用 XMLHttpRequests，
- 还拥有拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 XSRF

#### 为什么要封装

这个时候可能就会有人问了，既然 Axios 这么多优点，那为什么还需要对它进行封装呢？那是因为，前端项目不可能只有一个或者很少的接口请求，如果不封装，你可能就需要每一个接口都要导入 Axios，并且一些公共的请求功能，每次请求都要重新写一份配置，这样就会导致你的接口模块会很繁杂，代码冗余还不利于后面的维护工作。而且 axios 请求属于第三方库，一旦后面这个库有什么问题需要更换其他的库，我们只需要对我们封装的文件进行修改依赖第三方框架的部分，这样不会影响项目中其他需要发送请求的代码。

### 安装

使用 pnpm 安装 axios

```shell
pnpm install axios -D
```

axios 的基本使用

```js
axios(config);
axios.put(config);
axios.get(config);
axios.post(config);
axios.delete(config);
```

### 封装思路

将 axios 的封装自定义为 Request，在这一层对 axios 的功能进行解耦，实现请求以及响应拦截以及封装各个实例方法（get、post 等）

#### 创建 Request 实例

```ts
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = '/api';
const timeout = 6000;

export class Request {
  // axios 实例
  instance: AxiosInstance;
  // 基础配置，url和超时时间
  baseConfig: AxiosRequestConfig = { baseURL: baseURL, timeout: Number(timeout) };

  constructor(config: AxiosRequestConfig) {
    // 使用axios.create创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config));
  }
}

// 默认导出Request实例
export default new Request({});
```

- **AxiosRequestConfig** 常用配置有`url,method,baseUrl,data,timeout`等，具体配置见官网 [请求配置](https://www.axios-http.cn/docs/req_config)

- 像上述的这些配置，可以使用 process 进行全局配置参数,然后进行设置

  ```js
  const baseURL = process.env.[参数名];
  const timeout = process.env.[参数名];
  ```

#### 添加单个请求调用级别的拦截

在构造函数中添加请求拦截器以及响应拦截器，在请求或者响应时，根据成功或者错误的情况进行一些处理工作

```ts
  constructor(config: AxiosRequestConfig) {
    // 使用axios.create创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config));

    // 添加请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 一般会请求拦截里面加token，用于后端的验证
        config.headers = config.headers || {};
        config.headers.Authorization = '';
        return config;
      },
      (err: any) => {
        // 请求错误，这里可以用全局提示框进行提示
        return Promise.reject(err);
      },
    );

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么

        // 直接返回res，当然你也可以只返回res.data
        // 系统如果有自定义code也可以在这里处理
        return res.data;
      },
      (err: any) => {
        //  超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么

        // 这里用来处理http常见错误，进行全局提示
        let message = '';
        // 这里错误消息可以使用全局弹框展示出来
        // 比如element plus 可以使用 ElMessage
        // ElMessage({
        //   showClose: true,
        //   message: `${message}，请检查网络或联系管理员！`,
        //   type: "error",
        // });
        // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
        return Promise.reject(err.response);
      },
    );
  }
```

#### 封装实例方法（get、post 等）

在 Request 中添加一下实例方法

```ts
  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config);
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.get(url, config);
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.post(url, data, config);
  }

  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.put(url, data, config);
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
    return this.instance.delete(url, config);
  }
```

#### 使用

```jsx
import { Request } from './request'; //根据具体路径导入Request

// 实例化
const request = new Request({});

使用;
export function apiGetXXX(params: any) {
  return request.get('xxx/xx/x', params);
}
```

### 最后

Axios 封装其实还有很多事情可以做，比如全局级别的拦截等。而目前根据项目需要，只是进行以上的内容封装。但是在后续开发过程中，会根据项目需要进行封装内容的补充和改进。
