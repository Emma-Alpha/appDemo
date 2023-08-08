
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

const VERSION_NAME = "main_version"


export const openUpdateVersionNotify = () => {
  fetchUpdateVersionFile().then((res: any) => {

    console.log("当前版本号:", res.version, ENV, process)


    Interval.setInterval(() => {
      fetchUpdateVersionFile().then((res) => {
        console.log(res)
      })
    }, 1000 * 10)
    // 开发环境没有必要开启版本检测功能
    // if(ENV === "development") {
    //   return 
    // }

    // localStorage.setItem()
  })
}