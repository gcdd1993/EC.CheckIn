/**
 * 什么值得买签到
 */
function SMZDM() {
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
            logd('等待进入应用')
            sleep(1000)
        }
        while (true) {
            let selector = text('签到领奖')
            if (has(selector)) {
                click(selector)
            } else if (has(textMatch('已签\\d+天'))) {
                toast('已签到 --> ' +
                    textMatch('已签\\d+天').getOneNodeInfo(100).text)
                break
            } else if (has(text('签到成功'))) {
                break
            }
            sleep(1000)
        }
        toast('签到成功 --> ' + this.appName)
        toast(id('com.smzdm.client.android:id/tv_sub_title').getOneNodeInfo(100).text)
    }
}

const smzdm = new SMZDM()