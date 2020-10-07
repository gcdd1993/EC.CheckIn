/**
 * 什么值得买签到
 */
function SMZDM() {
    this.appName = '什么值得买'
    this.packageName = 'com.smzdm.client.android'

    this.init = () => {
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
        while (!has(text('我的'))) {
            logd('等待进入应用')
            sleep(1000)
        }
        click(text('我的'))
        while (true) {
            if (has(text('签到领奖'))) {
                break
            } else if (has(textMatch('已签\\d+天'))) {
                toast('已签到 --> ' +
                    textMatch('已签\\d+天').getOneNodeInfo(100).text)
                return
            }
            sleep(1000)
        }
        click(text('签到领奖'))
        while (!has(text('签到成功'))) {
            sleep(1000)
        }
        toast('签到成功 --> ' + this.appName)
        toast(id('com.smzdm.client.android:id/tv_sub_title').getOneNodeInfo(100).text)
    }
}

const smzdm = new SMZDM()