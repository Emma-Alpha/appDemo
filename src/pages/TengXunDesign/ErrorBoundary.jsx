import React from "react";
import { Result, Typography } from 'antd';

const { Paragraph, Text } = Typography;
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null, error: null };
  }

  // static getDerivedStateFromError(error) {
  //   // 更新 state 使下一次渲染能够显示降级后的 UI
  //   console.log(error)
  //   return { hasError: true, errorInfo: JSON.stringify(error) };
  // }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo)
    this.setState({
      hasError: true,
      errorInfo: errorInfo,
      error: error
    })
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return (
        <Result
          status="500"
          title="Something went wrong."
          extra={this.state.error.toString()}
        >
          <div className="desc">
            <Paragraph>
              <Text
                strong
                style={{
                  fontSize: 16,
                }}
              >
                The content you submitted has the following error:
              </Text>
            </Paragraph>
            <Paragraph style={{
              whiteSpace: "break-spaces"
            }} ellipsis={{
              rows: 2,
              expandable: true,
              symbol: '详情',
            }}>
              {this.state.errorInfo.componentStack}
            </Paragraph>
          </div>
        </Result>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;