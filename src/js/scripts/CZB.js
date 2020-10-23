/**
 * 团油签到
 */
function CZB() {
  this.taskName = 'CZB'
  this.appName = '团油'
  this.packageName = 'com.czb.chezhubang'

  this.init = () => {
    logd('初始化 --> ' + this.appName);
    image.requestScreenCapture(1000, 0)
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
      }
      // 广告弹幕
      if (_cmpColor_ad1()) {
        clickPoint(541, 1517)
      }
      selector = text('油滴')
      if (has(selector)) {
        click(selector)
      }
      if (_cmpColor_checkIn()) {
        clickPoint(557, 1408)
        break
      }
      if (_cmpColor_alwaysCheckIn()) {
        toast('已签到')
        break
      }
      sleep(1000)
    }
    toast('签到成功 --> ' + this.appName)
  }
}

/**
 * 广告弹窗
 * @returns {number|boolean}
 * @private
 */
function _cmpColor_ad1() {
  const points = '434|1479|0x666666-0x101010,530|1508|0xFFFFFF-0x101010,541|1496|0x666666-0x101010,553|1531|0xFFFFFF-0x101010';
  return image.cmpColorEx(points, 0.9, 0, 0, 0, 0);
}

/**
 * 签到领油滴
 * @returns {number|boolean}
 * @private
 */
function _cmpColor_checkIn() {
  const points = '417|1378|0xFF8346-0x101010,447|1391|0xFFFFFF-0x101010,496|1412|0xFFFFFF-0x101010,535|1448|0xFF592F-0x101010'
  return image.cmpColorEx(points, 0.9, 0, 0, 0, 0);
}

/**
 * 已签到
 * @returns {number|boolean}
 * @private
 */
function _cmpColor_alwaysCheckIn() {
  const points = '470|1380|0xC5C5C5-0x101010,495|1407|0xFFFFFF-0x101010,544|1408|0xFFFFFF-0x101010,565|1433|0xC5C5C5-0x101010'
  return image.cmpColorEx(points, 0.9, 0, 0, 0, 0);
}

const czb = new CZB()
