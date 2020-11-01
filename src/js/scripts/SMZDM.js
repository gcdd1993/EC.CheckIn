/**
 * 什么值得买签到
 */
function SMZDM() {
  this.taskName = 'SMZDM'
  this.appName = '什么值得买'
  this.packageName = 'com.smzdm.client.android'

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
      closeAD()
      logd('等待进入签到页面');
      sleep(1000)
    }
    while (true) {
      closeAD()
      let selector = text('签到领奖')
      if (has(selector)) {
        click(selector)
      }
      selector = text('点击获得额外奖励')
      if (has(selector)) {
        click(selector)
        break
      }
      selector = textMatch('已签\\d+天')
      if (has(selector)) {
        toast('已签到 --> ' + selector.getOneNodeInfo(100).text)
        break
      }
      selector = text('签到成功')
      if (has(selector)) {
        break
      }
      selector = text('已连续签到')
      if (has(selector)) {
        break
      }
      selector = text('已成功领取红包');
      if (has(selector)) {
        clickPoint(541, 1622)
      }
      logd('等待签到结果');
      sleep(1000)
    }
    toast('签到成功 --> ' + this.appName)
  }
}

const closeAD = () => {
  let selector = id('com.smzdm.client.android:id/dialog_home_ads_close')
  if (has(selector)) {
    click(selector)
  }
}

const smzdm = new SMZDM()
