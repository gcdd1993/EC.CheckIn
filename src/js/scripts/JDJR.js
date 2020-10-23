/**
 * 京东金融签到
 */
function JDJR() {
  this.taskName = 'JDJR'
  this.appName = '京东金融'
  this.packageName = 'com.jd.jrapp'

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
      let selector = id('com.jd.jrapp:id/iv_fifth_icon')
      if (has(selector)) {
        click(selector)
      }
      selector = text('钢镚')
      if (has(selector)) {
        click(selector)
      }
      selector = text('我的钢镚')
      if (has(selector)) {
        break
      }
      logd('等待进入签到页面');
      sleep(1000)
    }
    while (true) {
      // 签到的text
      let selector = text('ea529251528b4c65')
      if (has(selector)) {
        click(selector)
      }
      selector = text('签到领钢镚')
      if (has(selector)) {
        click(selector)
      }
      selector = textMatch('签到成功获得.*钢镚')
      if (has(selector)) {
        toast(getText(selector))
        break
      }
      selector = text('今日已签到')
      if (has(selector)) {
        break
      }
      logd('等待签到结果');
      sleep(1000)
    }
    toast('签到成功 --> ' + this.appName)
  }
}

const jdjr = new JDJR()
