/**
 * 编程狮签到
 */
function BCS() {
  this.taskName = 'BCS'
  this.appName = '编程狮'
  this.packageName = 'cn.w3cschool.app'

  this.init = () => {
    logd('初始化 --> ' + this.appName);
  }

  /**
   * 启动目标应用
   */
  this.runApp = () => {
    utils.openApp(this.packageName)
  }

  /**
   * 执行任务
   */
  this.run = () => {
    while (true) {
      let selector = text('我的')
      if (has(selector)) {
        click(selector)
        break
      }
      logd('等待进入签到页面');
      sleep(1000)
    }
    while (true) {
      let selector = text('签到')
      if (has(selector)) {
        click(selector)
      }
      selector = text('已签到')
      if (has(selector)) {
        toast('已签到')
        break
      }
      logd('等待签到结果');
      sleep(1000)
    }
    toast('签到成功 --> ' + this.appName)
  }
}

const bcs = new BCS()
