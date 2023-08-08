import { Spin } from "antd"
interface LoadingProps {
  error: any,
  timeOut: any,
  pastDelay: any
}

function Loading(props: LoadingProps & any) {
  const { error, timeOut, pastDelay } = props
  if (error) {
    return <div>Error! {error?.message}</div>;
  } else if (timeOut) {
    return <div>Loading timed out, please refresh the page... </div>;
  } else if (pastDelay) {
    return <Spin spinning>加载中...</Spin>;
  } else {
    return null;
  }
}

export default Loading;