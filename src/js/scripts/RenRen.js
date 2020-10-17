/**
 * 人人视频签到
 */
function RenRen() {
    this.taskName = 'RenRen'
    this.appName = '人人视频'
    this.packageName = 'com.zhongduomei.rrmj.society'

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
            selector = text('消息')
            if (has(selector)) {
                break
            }
            logd('等待进入签到页面');
            sleep(1000)
        }
        while (true) {
            let selector = text('签到有奖')
            if (has(selector)) {
                click(selector)
            }
            selector = text('签到成功')
            if (has(selector)) {
                click(text('我知道了'))
                break
            }
            selector = text('已签到')
            if (has(selector)) {
                break
            }
            logd('等待签到结果');
            sleep(1000)
        }
        toast('签到成功 --> ' + this.appName)
    }
}

const renRen = new RenRen()