/**
 * 哈弗智家签到
 */
function Haval() {
    this.appName = '哈弗智家'
    this.packageName = 'com.navinfo.gw'

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
            let selector = has(text('我的'))
            if (selector) {
                click(selector)
            }
            selector = text('去签到')
            if (has(selector)) {
                click(selector)
            }
            selector = id('com.navinfo.gw:id/tv_signin_signin')
            if (has(selector)) {
                click(selector)
                break
            }
            sleep(1000)
        }
        toast('签到成功 --> ' + this.appName)
    }
}

const haval = new Haval()