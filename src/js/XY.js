/**
 * 闲鱼签到
 */
function XY() {
    this.appName = '闲鱼'
    this.packageName = 'com.taobao.idlefish'

    /**
     * 初始化
     */
    this.init = () => {
        image.requestScreenCapture(10000,0);
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
        while (!has(text('闲鱼'))) {
            logd('等待进入应用')
            sleep(1000)
        }
        click(text('闲鱼'))
        while (true) {
            if (has(desc('闲鱼签到'))) {
                click(desc('闲鱼签到'))
                break
            }
            logd('等待进入签到页')
            sleep(1000)
        }
        _clickSignIn()
        // while (!has(text('签到成功'))) {
        //     sleep(1000)
        // }
        toast('签到成功 --> ' + this.appName)
    }
}

function _clickSignIn() {
    while (true) {
        if (_cmpColor_signIn()) {
            clickPoint(598, 1425)
            sleep(1000)
            return
        }
        if (_cmpColor_signIn01()) {
            clickPoint(972, 139)
            sleep(1000)
        }
        logd('等待签到页出现');
        sleep(1000)
    }
}

/**
 * 签到领币
 * @returns {number|boolean}
 * @private
 */
function _cmpColor_signIn() {
    const points = '459|1423|0x252525-0x101010,' +
        '479|1405|0xFFF133-0x101010,' +
        '510|1436|0x252525-0x101010,' +
        '630|1475|0xFFF133-0x101010,' +
        '597|1436|0x252525-0x101010,' +
        '618|1454|0x252525-0x101010'
    return image.cmpColorEx(points, 0.9, 0, 0, 0, 0)
}

/**
 * 右上角签到
 * @returns {number|boolean}
 * @private
 */
function _cmpColor_signIn01() {
    const points = '972|139|0xFFF1B3-0x101010,965|129|0xF29C2D-0x101010,980|175|0xFFC9CA-0x101010,1003|184|0xFFD7DB-0x101010'
    return image.cmpColorEx(points, 0.9, 0, 0, 0, 0)
}

const xy = new XY()