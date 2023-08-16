import { notification, message } from 'antd';
import React from 'react';

const APP_NAME = process.env.APP_NAME
interface IVersionRecord {
  action: '' | 'refreshedByClick',
  stack: string[]
}
// 对应的数组的key
const RECORD_KEY = `${APP_NAME!}_version_record`

// 当前版本号
let CUR_VERSION = ''
// 页面是否有通知
let CUR_STATE = false
// 是否通过点击通知触发刷新
let REFRESHED_BY_CLICK = false

window.addEventListener('beforeunload', () => {
  if (REFRESHED_BY_CLICK === false) {
    const recordStr = localStorage.getItem(RECORD_KEY)
    if (recordStr === null) return
    const record: IVersionRecord = JSON.parse(recordStr)
    if (record.action !== '') {
      record.action = ''
      localStorage.setItem(RECORD_KEY, JSON.stringify(record))
    }
  }
})

const Interval = {
  timer: 0,
  setInterval: function (callback: Function, interval: any) {
    let startTime = new Date().valueOf();
    let endTime = new Date().valueOf();
    const self = this;
    const loop = function () {
      self.timer = requestAnimationFrame(loop);
      endTime = new Date().valueOf();
      if (endTime - startTime >= interval) {
        endTime = startTime = new Date().valueOf();
        callback && callback();
      }
    };
    this.timer = requestAnimationFrame(loop);
    return this.timer;
  },
  clearInterval: function () {
    cancelAnimationFrame(this.timer);
  },
}

/**
 * 读取到更新的json文件版本内容
 */
const fetchUpdateVersionFile = () => {
  return new Promise((resolve, reject) => {
    fetch("/update_version.json")
      .then((res) => {
        return res.body
      })
      .then((body) => {
        const reader = body?.getReader();
        if (reader) {
          reader
            .read()
            .then((val) => {
              let str = "";
              if (val.value) {
                for (let i = 0; i < val.value.length; i++) {
                  str += String.fromCharCode(val.value[i]);
                }
              }
              return JSON.parse(str);
            })
            .then((json) => {
              resolve(json);
            })
            .catch((err) => {
              reject(err);
            });
        }

      }).catch((err) => {
        reject(err);
      })
  })
}

const ENV = process.env.NODE_ENV

const notifyUserUpdate = () => {

  const handleClick = () => {
    REFRESHED_BY_CLICK = true
    const recordStr = localStorage.getItem(RECORD_KEY)
    if (recordStr === null) return
    const record: IVersionRecord = JSON.parse(recordStr)
    record.action = 'refreshedByClick'
    localStorage.setItem(RECORD_KEY, JSON.stringify(record))
    window.location.reload()
  }
  const handleClose = () => {
    Interval.clearInterval()
    message.open({
      type: 'warning',
      content: '页面将不会提示更新',
    });
  }
  const openNotification = () => {
    const element = React.createElement(
      'div', // 类型
      {
        onClick: handleClick,
        style: { color: '#1677ff', cursor: 'pointer' }
      }, // 属性
      '页面已更新，请点击此处刷新页面!' // 子元素
    );
    notification.warning({
      message: '温馨提示',
      duration: null,
      onClose: handleClose,
      placement: 'bottomRight',
      description: element
    });
  };
  openNotification()
  CUR_STATE = true
}


const handleMain = (version: string, handleCb: Function, fetchDelay: number) => {
  // 记录当前版本号
  CUR_VERSION = version
  // 从本地获取历史记录
  const oldVersionRecordStr = localStorage.getItem(RECORD_KEY)
  // 继承历史记录中的action、stack
  let oldAction: IVersionRecord["action"] = ''
  let oldStack: IVersionRecord["stack"] = [version]
  if (oldVersionRecordStr !== null) {
    const record: IVersionRecord = JSON.parse(oldVersionRecordStr)
    oldAction = record.action
  }
  // 创建变量记录版本、操作
  const curVersionRecord: IVersionRecord = {
    action: oldAction,
    stack: oldStack
  }

  localStorage.setItem(RECORD_KEY, JSON.stringify(curVersionRecord))

  Interval.setInterval(() => {
    fetchUpdateVersionFile().then((res: any) => {
      // 读取版本记录
      const versionRecordStr = localStorage.getItem(RECORD_KEY)
      if (typeof versionRecordStr === 'string') {
        const versionRecord: IVersionRecord = JSON.parse(versionRecordStr)
        // 读取对应栈
        const lastVersion = versionRecord.stack[0]
        localStorage.setItem(RECORD_KEY, JSON.stringify(versionRecord))
        // 在服务器的版本与当前版本不一致
        if (res.version !== CUR_VERSION) {
          if (CUR_STATE == false) {
            // 发起通知
            handleCb()
          }
          else if (versionRecord.action === 'refreshedByClick' && lastVersion !== CUR_VERSION) {
            // 上一个标签页更新过，且当前标签页未更新
            REFRESHED_BY_CLICK = true
            window.location.reload()
          }
        }
      }
    })
  }, fetchDelay)
}

export const openUpdateVersionNotify = (fetchDelay: number) => {
  // 开发环境没有必要开启版本检测功能
  if (ENV === "development") {
    return
  }
  fetchUpdateVersionFile().then((res: any) => {
    handleMain(res.version, notifyUserUpdate, fetchDelay)
  })
}