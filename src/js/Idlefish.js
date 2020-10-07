/**
 * 闲鱼签到
 */
function Idlefish() {
    this.appName = '闲鱼'
    this.packageName = 'com.taobao.idlefish'

    /**
     * 初始化
     */
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
        while (!has(text('闲鱼'))) {
            logd('等待进入应用')
            sleep(1000)
        }
        click(text('闲鱼'))
        while (true) {
            let selector = text('闲鱼币')
            if (has(selector)) {
                clickPoint(985, 144)
            }
            selector = desc('闲鱼签到')
            if (has(selector)) {
                click(selector)
            }
            selector = text('签到领取')
            if (has(selector)) {
                click(selector)
                break
            }
            selector = text('签到领币')
            if (has(selector)) {
                break
            }
            logd('等待进入签到页')
            sleep(1000)
        }
        // _clickSignIn()
        toast('签到成功 --> ' + this.appName)
    }
}

const idlefish = new Idlefish()