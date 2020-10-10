/**
 * 哈弗智家签到
 */
function Haval() {
    this.taskName = 'Haval'
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
            let selector = text('我的')
            if (has(selector)) {
                click(selector)
            }
            selector = text('立即参加')
            if (has(selector)) {
                back()
            }
            selector = text('我的车辆')
            if (has(selector)) {
                break
            }
            logd('等待进入签到页面');
            sleep(1000)
        }
        while (true) {
            let selector = text('去签到')
            if (has(selector)) {
                click(selector)
            }
            selector = text('已签到')
            if (has(selector)) {
                toast('好像已经签到过了')
                break
            }
            selector = id('com.navinfo.gw:id/tv_signin_signin')
            if (has(selector)) {
                click(selector)
                break
            }
            logd('等待签到结果');
            sleep(1000)
        }
        toast('签到成功 --> ' + this.appName)
    }
}

const haval = new Haval()